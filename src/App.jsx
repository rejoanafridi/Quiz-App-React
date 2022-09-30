import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Question from "./components/question";
import { useMemo } from "react";
import Timer from "./components/timer/Timer";

function App() {
	const [questionNumber, setQuestionNumber] = useState(1);
	const [stop, setStop] = useState(false);
	const [earned, setEarned] = useState("$ 0");

	const price = useMemo(() =>
		[
			{
				id: 1,
				amount: 100,
			},
			{
				id: 2,
				amount: 200,
			},
			{
				id: 3,
				amount: 400,
			},
			{
				id: 4,
				amount: 800,
			},
			{
				id: 5,
				amount: 1600,
			},
			{
				id: 6,
				amount: 3200,
			},
			{
				id: 7,
				amount: 6400,
			},
			{
				id: 8,
				amount: 12800,
			},
			{
				id: 9,
				amount: 25600,
			},
			{
				id: 10,
				amount: 51200,
			},
			{
				id: 11,
				amount: 100000,
			},
			{
				id: 12,
				amount: 200000,
			},
			{
				id: 13,
				amount: 400000,
			},
			{
				id: 14,
				amount: 800000,
			},
			{
				id: 15,
				amount: 1000000,
			},
		].reverse()
	);
	useEffect(() => {
		questionNumber > 1 &&
			setEarned(price.find((money) => money.id === questionNumber - 1).amount);
	}, [price, questionNumber]);
	return (
		<>
			<div className="main">
				<div className="left-content">
					{stop ? (
						<h2> You earned: {earned}</h2>
					) : (
						<>
							<div className="timer">
								<Timer setStop={setStop} questionNumber={questionNumber} />
							</div>
							<div className="questions">
								<Question
									setStop={setStop}
									setQuestionNumber={setQuestionNumber}
									questionNumber={questionNumber}
								/>
							</div>
						</>
					)}
				</div>

				<div className="right-content">
					<ul>
						{price.map((p) => (
							<React.Fragment key={p.id}>
								<li className={questionNumber === p.id ? "active" : ""}>
									{p?.id} <span>$ {p?.amount}</span>
								</li>
							</React.Fragment>
						))}
					</ul>
				</div>
			</div>
			<div className="footer"></div>
		</>
	);
}

export default App;
