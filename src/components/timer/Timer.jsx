import React, { useEffect, useState } from "react";

const Timer = ({ setStop, questionNumber }) => {
	const [timer, setTimer] = useState(30);
	useEffect(() => {
		const interval = setInterval(() => {
			if (timer === 0) return setStop(true);
			setTimer((prev) => prev - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [setStop, timer]);
	useEffect(() => {
		setTimer(30);
	}, [questionNumber]);

	return <span>{timer}</span>;
};

export default Timer;
