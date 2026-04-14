from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.test import APITestCase

from .models import Choice, Lesson, Module, Question, QuizSession


class CoreApiTests(APITestCase):
	def setUp(self):
		self.user = User.objects.create_user(username="tester", password="test")
		self.module = Module.objects.create(number=1, title="Python")
		self.lesson = Lesson.objects.create(module=self.module, number=1, title="Podstawy")
		self.question = Question.objects.create(
			lesson=self.lesson,
			type="MCQ",
			difficulty="easy",
			question_text="2 + 2 = ?",
			is_approved=True,
			multi_correct=False,
		)
		Choice.objects.create(question=self.question, label="a", text="3", is_correct=False)
		Choice.objects.create(question=self.question, label="b", text="4", is_correct=True)

	def test_questions_filter_endpoint(self):
		response = self.client.get(f"/api/questions/?lesson_id={self.lesson.id}")
		self.assertEqual(response.status_code, 200)
		self.assertEqual(response.data["results"][0]["question_text"], "2 + 2 = ?")

	def test_quiz_answer_updates_score(self):
		create_payload = {"mode": "manual", "lesson_ids": [self.lesson.id], "count": 1}
		create_response = self.client.post("/api/quiz/sessions/", create_payload, format="json")
		self.assertEqual(create_response.status_code, 201)
		session_id = create_response.data["id"]

		answer_payload = {
			"question_id": self.question.id,
			"given_answers": ["b"],
			"time_spent_sec": 12,
		}
		answer_response = self.client.post(f"/api/quiz/sessions/{session_id}/answer/", answer_payload, format="json")
		self.assertEqual(answer_response.status_code, 200)

		session = QuizSession.objects.get(id=session_id)
		self.assertEqual(session.score, 1)

	def test_dashboard_endpoint(self):
		response = self.client.get("/api/dashboard/")
		self.assertEqual(response.status_code, 200)
		self.assertIn("due_today", response.data)
