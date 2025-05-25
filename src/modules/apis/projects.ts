import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// プロジェクト関連の型定義
export interface Project {
	id: string;
	name: string;
	description?: string;
	status?: "active" | "inactive" | "completed";
	createdAt: string;
	updatedAt: string;
}

export interface ProjectResponse {
	success: boolean;
	message?: string;
	project?: Project;
	projects?: Project[];
	lastUpdated?: string;
	error?: string;
}

const API_BASE_URL = "http://ai-dd.com/apis";

// API関数
/**
 * プロジェクトを作成または更新する
 */
export async function saveProject(
	projectData: Partial<Project>
): Promise<ProjectResponse> {
	try {
		const response = await fetch(`${API_BASE_URL}/projects`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(projectData),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data: ProjectResponse = await response.json();
		return data;
	} catch (error) {
		console.error("Error saving project:", error);
		return {
			success: false,
			message: "Failed to save project",
			error: error instanceof Error ? error.message : "Unknown error",
		};
	}
}

/**
 * すべてのプロジェクトを取得する
 */
export async function getProjects(): Promise<ProjectResponse> {
	try {
		const response = await fetch(`${API_BASE_URL}/projects`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data: ProjectResponse = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching projects:", error);
		return {
			success: false,
			message: "Failed to fetch projects",
			projects: [],
			error: error instanceof Error ? error.message : "Unknown error",
		};
	}
}

/**
 * サンプルプロジェクトデータを作成する
 */
export function createSampleProject(
	name: string,
	description?: string
): Partial<Project> {
	return {
		name,
		description: description || `Sample project: ${name}`,
		status: "active",
	};
}

/**
 * サービスワーカーの状態を確認する
 */
export function getServiceWorkerStatus(): {
	supported: boolean;
	registered: boolean;
	active: boolean;
} {
	const supported = "serviceWorker" in navigator;

	if (!supported) {
		return { supported: false, registered: false, active: false };
	}

	const registration = navigator.serviceWorker.controller;
	const registered = !!registration;
	const active = !!(registration && registration.state === "activated");

	return { supported, registered, active };
}

// TanStack Query Keys
export const projectKeys = {
	all: ["projects"] as const,
	lists: () => [...projectKeys.all, "list"] as const,
	list: (filters: string) => [...projectKeys.lists(), { filters }] as const,
	details: () => [...projectKeys.all, "detail"] as const,
	detail: (id: string) => [...projectKeys.details(), id] as const,
};

// React Query Hooks
/**
 * プロジェクト一覧を取得するhook
 */
export function useProjects() {
	return useQuery({
		queryKey: projectKeys.lists(),
		queryFn: async () => {
			const response = await getProjects();
			if (!response.success) {
				throw new Error(response.message || "Failed to fetch projects");
			}
			return response.projects || [];
		},
		staleTime: 5 * 60 * 1000, // 5分間はキャッシュを使用
		gcTime: 10 * 60 * 1000, // 10分間キャッシュを保持
	});
}

/**
 * プロジェクトを保存するmutation hook
 */
export function useSaveProject() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: saveProject,
		onSuccess: (data) => {
			if (data.success) {
				// プロジェクト一覧のキャッシュを無効化して再取得
				queryClient.invalidateQueries({ queryKey: projectKeys.lists() });
			}
		},
		onError: (error) => {
			console.error("Failed to save project:", error);
		},
	});
}

/**
 * 複数のサンプルプロジェクトを追加するmutation hook
 */
export function useAddSampleProjects() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async () => {
			const sampleProjects = [
				createSampleProject(
					"Webアプリケーション開発",
					"Reactを使用したWebアプリケーション"
				),
				createSampleProject(
					"モバイルアプリ開発",
					"React Nativeを使用したモバイルアプリ"
				),
				createSampleProject("API開発", "RESTful APIの設計と実装"),
			];

			const results = [];
			for (const project of sampleProjects) {
				const result = await saveProject(project);
				results.push(result);
			}

			return results;
		},
		onSuccess: (results) => {
			const allSuccessful = results.every((result) => result.success);
			if (allSuccessful) {
				// プロジェクト一覧のキャッシュを無効化して再取得
				queryClient.invalidateQueries({ queryKey: projectKeys.lists() });
			}
		},
		onError: (error) => {
			console.error("Failed to add sample projects:", error);
		},
	});
}
