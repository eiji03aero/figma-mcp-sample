import { createFileRoute } from "@tanstack/react-router";
import { ServiceWorkerDemo } from "@/views/ServiceWorkerDemo";

export const Route = createFileRoute("/service-worker-demo")({
	component: () => <ServiceWorkerDemo />,
});
