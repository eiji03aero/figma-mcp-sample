import { css } from "@emotion/css";
import { ServiceWorkerStatus } from "@/views/ServiceWorkerDemo/components/ServiceWorkerStatus";
import { ProjectForm } from "@/views/ServiceWorkerDemo/components/ProjectForm";
import { ProjectList } from "@/views/ServiceWorkerDemo/components/ProjectList";
import { ActionButtons } from "@/views/ServiceWorkerDemo/components/ActionButtons";
import { MessageDisplay } from "@/views/ServiceWorkerDemo/components/MessageDisplay";
import { Instructions } from "@/views/ServiceWorkerDemo/components/Instructions";
import { useServiceWorkerDemo } from "@/views/ServiceWorkerDemo/hooks/useServiceWorkerDemo";

export const ServiceWorkerDemo = () => {
	const {
		projects,
		loading,
		message,
		serviceWorkerStatus,
		loadProjects,
		handleSaveProject,
		addSampleProjects,
	} = useServiceWorkerDemo();

	return (
		<div className={Styles.container}>
			<h1 className={Styles.title}>サービスワーカー デモ</h1>

			<ServiceWorkerStatus status={serviceWorkerStatus} />

			<ProjectForm onSave={handleSaveProject} loading={loading} />

			<ActionButtons
				onLoadProjects={loadProjects}
				onAddSampleProjects={addSampleProjects}
				loading={loading}
			/>

			<MessageDisplay message={message} />

			<ProjectList projects={projects} />

			<Instructions />
		</div>
	);
};

const Styles = {
	container: css`
		max-width: 64rem;
		margin: 0 auto;
		padding: 1.5rem;
	`,
	title: css`
		font-size: 1.875rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		text-align: center;
	`,
};
