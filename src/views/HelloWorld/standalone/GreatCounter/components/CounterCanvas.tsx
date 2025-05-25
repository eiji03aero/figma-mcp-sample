import { useEffect } from "react";
import { css } from "@emotion/css";
import { canvasRenderer } from "@/views/HelloWorld/standalone/GreatCounter/services/canvasRenderer";

interface CounterCanvasProps {
	canvasRef: React.RefObject<HTMLCanvasElement | null>;
	count: number;
}

export const CounterCanvas = ({ canvasRef, count }: CounterCanvasProps) => {
	useEffect(() => {
		if (canvasRef.current) {
			canvasRenderer.render(canvasRef.current, count);
		}
	}, [count, canvasRef]);

	return (
		<canvas
			ref={canvasRef}
			width={400}
			height={240}
			className={Styles.canvas}
		/>
	);
};

const Styles = {
	canvas: css`
		border: 2px solid #d1d5db;
		border-radius: 8px;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
		background-color: #f9fafb;
	`,
};
