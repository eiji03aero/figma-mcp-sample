import { css } from "@emotion/css";
import { useGreatCounter } from "@/views/HelloWorld/standalone/GreatCounter/hooks/useGreatCounter";
import { CounterCanvas } from "@/views/HelloWorld/standalone/GreatCounter/components/CounterCanvas";
import { Button } from "@/components/ui-inventory";

export const GreatCounter = () => {
	const { count, increment, reset, canvasRef } = useGreatCounter();

	return (
		<div className={Styles.container}>
			<h2 className={Styles.title}>Great Counter</h2>

			<CounterCanvas canvasRef={canvasRef} count={count} />

			<div className={Styles.buttonContainer}>
				<Button variant="primary" onClick={increment}>
					Count Up! 🚀
				</Button>
				<Button variant="secondary" onClick={reset}>
					Reset 🔄
				</Button>
			</div>

			<div className={Styles.description}>
				<p>3の倍数で アホな言葉</p>
				<p>5の倍数で スケベな言葉</p>
				<p>15の倍数で グレタちゃん登場！</p>
			</div>
		</div>
	);
};

const Styles = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		padding: 32px;
		background-color: white;
		border-radius: 12px;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		max-width: 28rem;
		margin: 0 auto;
	`,
	title: css`
		font-size: 1.5rem;
		font-weight: 700;
		color: #1f2937;
		margin-bottom: 8px;
	`,
	buttonContainer: css`
		display: flex;
		gap: 16px;
	`,
	description: css`
		font-size: 0.875rem;
		color: #4b5563;
		text-align: center;
		max-width: 20rem;

		p {
			margin: 4px 0;
		}
	`,
};
