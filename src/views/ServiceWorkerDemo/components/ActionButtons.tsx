import { css } from "@emotion/css";

interface ActionButtonsProps {
	onLoadProjects: () => void;
	onAddSampleProjects: () => void;
	loading: boolean;
}

export const ActionButtons = ({
	onLoadProjects,
	onAddSampleProjects,
	loading,
}: ActionButtonsProps) => {
	return (
		<div className={Styles.container}>
			<button
				onClick={onLoadProjects}
				disabled={loading}
				className={`${Styles.button} ${Styles.greenButton} ${loading ? Styles.disabledButton : ""}`}
			>
				{loading ? "読み込み中..." : "プロジェクト一覧を読み込み"}
			</button>
			<button
				onClick={onAddSampleProjects}
				disabled={loading}
				className={`${Styles.button} ${Styles.purpleButton} ${loading ? Styles.disabledButton : ""}`}
			>
				{loading ? "追加中..." : "サンプルプロジェクトを追加"}
			</button>
		</div>
	);
};

const Styles = {
	container: css`
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	`,
	button: css`
		padding: 0.5rem 1rem;
		border-radius: 0.375rem;
		font-weight: bold;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s;
	`,
	greenButton: css`
		background: #10b981;
		color: white;
		&:hover {
			background: #059669;
		}
	`,
	purpleButton: css`
		background: #8b5cf6;
		color: white;
		&:hover {
			background: #7c3aed;
		}
	`,
	disabledButton: css`
		opacity: 0.5;
		cursor: not-allowed;
		&:hover {
			background: inherit;
		}
	`,
};
