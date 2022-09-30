import React, { useEffect, useState } from "react";
import "./question.css";
const Question = ({ setStop, questionNumber, setQuestionNumber }) => {
	const [question, setQuestion] = useState(null);

	const [selectAnswer, setSelectAnswer] = useState(null);

	const [questions, setQuestions] = useState([
		{
			id: 1,
			question: "Rolex is a company that specializes in what type of product?",
			answers: [
				{
					text: "Phone",
					correct: false,
				},
				{
					text: "Watches",
					correct: true,
				},
				{
					text: "Food",
					correct: false,
				},
				{
					text: "Cosmetic",
					correct: false,
				},
			],
		},
		{
			id: 2,
			question: "When did the website `Facebook` launch?",
			answers: [
				{
					text: "2004",
					correct: true,
				},
				{
					text: "2005",
					correct: false,
				},
				{
					text: "2006",
					correct: false,
				},
				{
					text: "2007",
					correct: false,
				},
			],
		},
		{
			id: 3,
			question: "Who played the character of harry potter in movie?",
			answers: [
				{
					text: "Johnny Deep",
					correct: false,
				},
				{
					text: "Leonardo Di Caprio",
					correct: false,
				},
				{
					text: "Denzel Washington",
					correct: false,
				},
				{
					text: "Daniel Red Cliff",
					correct: true,
				},
			],
		},
		{
			id: 4,
			question: "Which method is not part of ReactDOM?",
			answers: [
				{
					text: "ReactDOM.destroy()",
					correct: false,
				},
				{
					text: "ReactDOM.hydrate()",
					correct: false,
				},
				{
					text: "ReactDOM.createPortal()",
					correct: false,
				},
				{
					text: "ReactDOM.findDOMNode()",
					correct: true,
				},
			],
		},
	]);

	const [active, setActive] = useState("answer");

	console.log("question amu", question);
	useEffect(() => {
		// fetch("/api/question.json")
		// 	.then((response) => response.json())
		// 	.then((data) => setQuestions(data));
		setQuestion(questions[questionNumber - 1]);
	}, [questions, questionNumber]);

	const delay = (duration, callback) => {
		setTimeout(() => {
			callback();
		}, duration);
	};

	const handleAnswer = (qns) => {
		setSelectAnswer(qns);
		setActive("answer active");
		delay(2000, () => {
			setActive(qns?.correct ? "answer correct" : "answer wrong");
		});
		delay(4000, () => {
			if (qns.correct) {
				setQuestionNumber((prev) => prev + 1);
				setSelectAnswer(null);
			} else {
				setStop(true);
			}
		});
	};
	return (
		<div>
			<div className="question-container">
				<div className="question-title">
					<h3>{question?.question}</h3>
				</div>
				<div className="question-hints">
					{question?.answers.map((qns, id) => (
						<React.Fragment key={id}>
							<div
								className={selectAnswer === qns ? active : "answer"}
								onClick={() => handleAnswer(qns)}
							>
								{qns?.text}
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default Question;
