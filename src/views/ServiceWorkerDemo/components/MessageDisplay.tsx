import { css } from "@emotion/css";

interface MessageDisplayProps {
	message: string;
}

export const MessageDisplay = ({ message }: MessageDisplayProps) => {
	if (!message) return null;

	return <div className={Styles.container}>{message}</div>;
};

const Styles = {
	container: css`
		background: #dbeafe;
		border: 1px solid #60a5fa;
		color: #1e40af;
		padding: 0.75rem 1rem;
		border-radius: 0.375rem;
		margin-bottom: 1.5rem;
	`,
};
