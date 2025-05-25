import { useForm } from "@tanstack/react-form";
import { z } from "zod";

// Zodスキーマ定義
const projectFormSchema = z.object({
	name: z
		.string()
		.min(1, "プロジェクト名は必須です")
		.min(2, "プロジェクト名は2文字以上で入力してください")
		.max(100, "プロジェクト名は100文字以内で入力してください"),
	description: z
		.string()
		.max(500, "説明は500文字以内で入力してください")
		.optional()
		.or(z.literal("")),
});

export type ProjectFormData = z.infer<typeof projectFormSchema>;

export const useProjectForm = (onSubmit: (data: ProjectFormData) => void) => {
	const form = useForm({
		defaultValues: {
			name: "",
			description: "",
		} as ProjectFormData,
		onSubmit: async ({ value }) => {
			// 空文字列をundefinedに変換
			const processedValue = {
				...value,
				description: value.description === "" ? undefined : value.description,
			};
			onSubmit(processedValue);
		},
		validators: {
			onChange: projectFormSchema,
		},
	});

	return {
		form,
		// 便利なヘルパー関数
		resetForm: () => form.reset(),
		isValid: form.state.isValid,
		isSubmitting: form.state.isSubmitting,
		canSubmit: form.state.canSubmit,
	};
};
