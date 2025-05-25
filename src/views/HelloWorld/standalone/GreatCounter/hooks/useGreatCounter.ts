import { useState, useRef } from "react";

export const useGreatCounter = () => {
	const [count, setCount] = useState(0);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	const reset = () => {
		setCount(0);
	};

	return {
		count,
		increment,
		reset,
		canvasRef,
	};
};
