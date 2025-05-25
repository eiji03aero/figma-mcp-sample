import { css } from "@emotion/css";

interface ServiceWorkerStatusProps {
	status: {
		supported: boolean;
		registered: boolean;
		active: boolean;
	};
}

export const ServiceWorkerStatus = ({ status }: ServiceWorkerStatusProps) => {
	return (
		<div className={Styles.container}>
			<h2 className={Styles.title}>サービスワーカーの状態</h2>
			<div className={Styles.statusGrid}>
				<div
					className={`${Styles.statusItem} ${status.supported ? Styles.success : Styles.error}`}
				>
					<div className={Styles.statusLabel}>サポート</div>
					<div className={Styles.statusIcon}>
						{status.supported ? "✓" : "✗"}
					</div>
				</div>
				<div
					className={`${Styles.statusItem} ${status.registered ? Styles.success : Styles.warning}`}
				>
					<div className={Styles.statusLabel}>登録済み</div>
					<div className={Styles.statusIcon}>
						{status.registered ? "✓" : "✗"}
					</div>
				</div>
				<div
					className={`${Styles.statusItem} ${status.active ? Styles.success : Styles.warning}`}
				>
					<div className={Styles.statusLabel}>アクティブ</div>
					<div className={Styles.statusIcon}>{status.active ? "✓" : "✗"}</div>
				</div>
			</div>
		</div>
	);
};

const Styles = {
	container: css`
		background: #f3f4f6;
		padding: 1rem;
		border-radius: 0.5rem;
		margin-bottom: 1.5rem;
	`,
	title: css`
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
	`,
	statusGrid: css`
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	`,
	statusItem: css`
		text-align: center;
		padding: 0.5rem;
		border-radius: 0.25rem;
	`,
	statusLabel: css`
		font-weight: 500;
	`,
	statusIcon: css`
		margin-top: 0.25rem;
	`,
	success: css`
		background: #dcfce7;
		color: #166534;
	`,
	warning: css`
		background: #fef3c7;
		color: #92400e;
	`,
	error: css`
		background: #fecaca;
		color: #991b1b;
	`,
};
