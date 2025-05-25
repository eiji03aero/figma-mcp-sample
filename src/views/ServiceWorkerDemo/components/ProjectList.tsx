import { css } from "@emotion/css";
import type { Project } from "@/modules/apis/projects";

interface ProjectListProps {
	projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
	return (
		<div className={Styles.container}>
			<h2 className={Styles.title}>プロジェクト一覧 ({projects.length}件)</h2>
			{projects.length === 0 ? (
				<p className={Styles.emptyMessage}>プロジェクトがありません</p>
			) : (
				<div className={Styles.projectGrid}>
					{projects.map((project) => (
						<ProjectItem key={project.id} project={project} />
					))}
				</div>
			)}
		</div>
	);
};

interface ProjectItemProps {
	project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
	const getStatusStyle = (status?: string) => {
		switch (status) {
			case "active":
				return Styles.statusActive;
			case "completed":
				return Styles.statusCompleted;
			default:
				return Styles.statusDefault;
		}
	};

	return (
		<div className={Styles.projectItem}>
			<div className={Styles.projectContent}>
				<h3 className={Styles.projectName}>{project.name}</h3>
				{project.description && (
					<p className={Styles.projectDescription}>{project.description}</p>
				)}
				<div className={Styles.projectMeta}>
					<span
						className={`${Styles.statusBadge} ${getStatusStyle(project.status)}`}
					>
						{project.status}
					</span>
					<span className={Styles.metaText}>
						作成: {new Date(project.createdAt).toLocaleString()}
					</span>
					<span className={Styles.metaText}>
						更新: {new Date(project.updatedAt).toLocaleString()}
					</span>
				</div>
			</div>
		</div>
	);
};

const Styles = {
	container: css`
		background: white;
		border: 1px solid #d1d5db;
		border-radius: 0.5rem;
		padding: 1.5rem;
	`,
	title: css`
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
	`,
	emptyMessage: css`
		color: #6b7280;
		text-align: center;
		padding: 2rem 0;
	`,
	projectGrid: css`
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	`,
	projectItem: css`
		border: 1px solid #e5e7eb;
		border-radius: 0.5rem;
		padding: 1rem;
	`,
	projectContent: css`
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	`,
	projectName: css`
		font-weight: 600;
		font-size: 1.125rem;
	`,
	projectDescription: css`
		color: #4b5563;
	`,
	projectMeta: css`
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 0.875rem;
		color: #6b7280;
		flex-wrap: wrap;
	`,
	statusBadge: css`
		padding: 0.125rem 0.5rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		font-weight: 500;
	`,
	statusActive: css`
		background: #dcfce7;
		color: #166534;
	`,
	statusCompleted: css`
		background: #dbeafe;
		color: #1e40af;
	`,
	statusDefault: css`
		background: #f3f4f6;
		color: #374151;
	`,
	metaText: css`
		white-space: nowrap;
	`,
};
