import { useState, useEffect } from "react";
import {
	useProjects,
	useSaveProject,
	useAddSampleProjects,
	getServiceWorkerStatus,
	createSampleProject,
} from "@/modules/apis/projects";
import type { ProjectFormData } from "@/views/ServiceWorkerDemo/hooks/useProjectForm";

export const useServiceWorkerDemo = () => {
	const [message, setMessage] = useState<string>("");
	const [serviceWorkerStatus, setServiceWorkerStatus] = useState(
		getServiceWorkerStatus()
	);

	// TanStack Query hooks
	const {
		data: projects = [],
		isLoading: isLoadingProjects,
		refetch: refetchProjects,
	} = useProjects();
	const saveProjectMutation = useSaveProject();
	const addSampleProjectsMutation = useAddSampleProjects();

	// 全体のローディング状態
	const loading =
		isLoadingProjects ||
		saveProjectMutation.isPending ||
		addSampleProjectsMutation.isPending;

	// サービスワーカーの状態を定期的に確認
	useEffect(() => {
		const interval = setInterval(() => {
			setServiceWorkerStatus(getServiceWorkerStatus());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	// プロジェクト一覧を読み込む
	const loadProjects = async () => {
		setMessage("プロジェクトを読み込み中...");
		try {
			const result = await refetchProjects();
			if (result.data) {
				setMessage(`プロジェクトを ${result.data.length} 件読み込みました`);
			} else {
				setMessage("プロジェクトの読み込みに失敗しました");
			}
		} catch (error) {
			setMessage(
				"エラーが発生しました: " +
					(error instanceof Error ? error.message : "Unknown error")
			);
		}
	};

	// 新しいプロジェクトを保存
	const handleSaveProject = async (formData: ProjectFormData) => {
		setMessage("プロジェクトを保存中...");

		try {
			const projectData = createSampleProject(
				formData.name,
				formData.description
			);
			const result = await saveProjectMutation.mutateAsync(projectData);

			if (result.success) {
				setMessage("プロジェクトが正常に保存されました");
			} else {
				setMessage(result.message || "プロジェクトの保存に失敗しました");
			}
		} catch (error) {
			setMessage(
				"エラーが発生しました: " +
					(error instanceof Error ? error.message : "Unknown error")
			);
		}
	};

	// サンプルプロジェクトを追加
	const addSampleProjects = async () => {
		setMessage("サンプルプロジェクトを追加中...");

		try {
			await addSampleProjectsMutation.mutateAsync();
			setMessage("サンプルプロジェクトが追加されました");
		} catch (error) {
			setMessage(
				"エラーが発生しました: " +
					(error instanceof Error ? error.message : "Unknown error")
			);
		}
	};

	return {
		projects,
		loading,
		message,
		serviceWorkerStatus,
		loadProjects,
		handleSaveProject,
		addSampleProjects,
	};
};
