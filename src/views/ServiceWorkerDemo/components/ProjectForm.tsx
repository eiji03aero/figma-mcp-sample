import { css } from "@emotion/css";
import {
	useProjectForm,
	type ProjectFormData,
} from "@/views/ServiceWorkerDemo/hooks/useProjectForm";

interface ProjectFormProps {
	onSave: (data: ProjectFormData) => void;
	loading: boolean;
}

export const ProjectForm = ({ onSave, loading }: ProjectFormProps) => {
	const { form, resetForm, isSubmitting, canSubmit } = useProjectForm(
		(data) => {
			onSave(data);
			resetForm(); // 送信成功後にフォームをリセット
		}
	);

	return (
		<div className={Styles.container}>
			<h2 className={Styles.title}>新しいプロジェクトを作成</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className={Styles.formGroup}
			>
				<form.Field
					name="name"
					validators={{
						onChange: ({ value }) => {
							if (!value) return "プロジェクト名は必須です";
							if (value.length < 2)
								return "プロジェクト名は2文字以上で入力してください";
							if (value.length > 100)
								return "プロジェクト名は100文字以内で入力してください";
							return undefined;
						},
						onBlur: ({ value }) => {
							if (!value) return "プロジェクト名は必須です";
							if (value.length < 2)
								return "プロジェクト名は2文字以上で入力してください";
							if (value.length > 100)
								return "プロジェクト名は100文字以内で入力してください";
							return undefined;
						},
					}}
				>
					{(field) => (
						<div className={Styles.inputGroup}>
							<label htmlFor="projectName" className={Styles.label}>
								プロジェクト名 *
							</label>
							<input
								type="text"
								id="projectName"
								name={field.name}
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								className={`${Styles.input} ${
									field.state.meta.isTouched &&
									field.state.meta.errors.length > 0
										? Styles.inputError
										: ""
								}`}
								placeholder="プロジェクト名を入力してください"
								disabled={loading || isSubmitting}
							/>
							{field.state.meta.isTouched &&
								field.state.meta.errors.length > 0 && (
									<span className={Styles.errorMessage}>
										{String(field.state.meta.errors[0])}
									</span>
								)}
						</div>
					)}
				</form.Field>

				<form.Field
					name="description"
					validators={{
						onChange: ({ value }) => {
							if (value && value.length > 500)
								return "説明は500文字以内で入力してください";
							return undefined;
						},
						onBlur: ({ value }) => {
							if (value && value.length > 500)
								return "説明は500文字以内で入力してください";
							return undefined;
						},
					}}
				>
					{(field) => (
						<div className={Styles.inputGroup}>
							<label htmlFor="projectDescription" className={Styles.label}>
								説明
							</label>
							<textarea
								id="projectDescription"
								name={field.name}
								value={field.state.value || ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								rows={3}
								className={`${Styles.textarea} ${
									field.state.meta.isTouched &&
									field.state.meta.errors.length > 0
										? Styles.inputError
										: ""
								}`}
								placeholder="プロジェクトの説明を入力してください"
								disabled={loading || isSubmitting}
							/>
							{field.state.meta.isTouched &&
								field.state.meta.errors.length > 0 && (
									<span className={Styles.errorMessage}>
										{String(field.state.meta.errors[0])}
									</span>
								)}
						</div>
					)}
				</form.Field>

				<button
					type="submit"
					disabled={loading || isSubmitting || !canSubmit}
					className={`${Styles.button} ${Styles.primaryButton} ${
						loading || isSubmitting || !canSubmit ? Styles.disabledButton : ""
					}`}
				>
					{loading || isSubmitting ? "保存中..." : "プロジェクトを保存"}
				</button>

				{form.state.errors.length > 0 && (
					<div className={Styles.formError}>
						入力内容に問題があります。エラーメッセージを確認してください。
					</div>
				)}
			</form>
		</div>
	);
};

const Styles = {
	container: css`
		background: white;
		border: 1px solid #d1d5db;
		border-radius: 0.5rem;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	`,
	title: css`
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
	`,
	formGroup: css`
		display: flex;
		flex-direction: column;
		gap: 1rem;
	`,
	inputGroup: css`
		display: flex;
		flex-direction: column;
	`,
	label: css`
		font-size: 0.875rem;
		font-weight: 500;
		color: #374151;
		margin-bottom: 0.25rem;
	`,
	input: css`
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #d1d5db;
		border-radius: 0.375rem;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
		&:focus {
			outline: none;
			border-color: #3b82f6;
			box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
		}
		&:disabled {
			background-color: #f9fafb;
			cursor: not-allowed;
		}
	`,
	textarea: css`
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #d1d5db;
		border-radius: 0.375rem;
		resize: vertical;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
		&:focus {
			outline: none;
			border-color: #3b82f6;
			box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
		}
		&:disabled {
			background-color: #f9fafb;
			cursor: not-allowed;
		}
	`,
	inputError: css`
		border-color: #ef4444;
		&:focus {
			border-color: #ef4444;
			box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.5);
		}
	`,
	errorMessage: css`
		color: #ef4444;
		font-size: 0.75rem;
		margin-top: 0.25rem;
	`,
	formError: css`
		background: #fef2f2;
		border: 1px solid #fecaca;
		color: #dc2626;
		padding: 0.75rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
	`,
	button: css`
		padding: 0.5rem 1rem;
		border-radius: 0.375rem;
		font-weight: bold;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s;
	`,
	primaryButton: css`
		background: #3b82f6;
		color: white;
		&:hover:not(:disabled) {
			background: #1d4ed8;
		}
	`,
	disabledButton: css`
		opacity: 0.5;
		cursor: not-allowed;
		&:hover {
			background: #3b82f6;
		}
	`,
};
