import { css } from "@emotion/css";

export const Instructions = () => {
	return (
		<div className={Styles.container}>
			<h3 className={Styles.title}>使用方法:</h3>
			<ol className={Styles.instructionList}>
				<li className={Styles.instructionItem}>
					サービスワーカーが正常に登録されていることを確認してください
				</li>
				<li className={Styles.instructionItem}>
					「プロジェクトを保存」ボタンでプロジェクトをキャッシュに保存します
				</li>
				<li className={Styles.instructionItem}>
					「プロジェクト一覧を読み込み」ボタンでキャッシュからプロジェクトを読み込みます
				</li>
				<li className={Styles.instructionItem}>
					ブラウザの開発者ツールのNetworkタブで通信がサービスワーカーによって処理されることを確認できます
				</li>
			</ol>
		</div>
	);
};

const Styles = {
	container: css`
		margin-top: 2rem;
		background: #fffbeb;
		border: 1px solid #fbbf24;
		border-radius: 0.5rem;
		padding: 1rem;
	`,
	title: css`
		font-weight: 600;
		margin-bottom: 0.5rem;
	`,
	instructionList: css`
		list-style: decimal;
		list-style-position: inside;
		font-size: 0.875rem;
		line-height: 1.5;
	`,
	instructionItem: css`
		margin-bottom: 0.25rem;
	`,
};
