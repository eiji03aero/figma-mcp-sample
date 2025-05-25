import { createFileRoute } from "@tanstack/react-router";
import { HelloWorld } from "@/views/HelloWorld";

export const Route = createFileRoute("/hello-world")({
	component: RouteComponent,
});

function RouteComponent() {
	return <HelloWorld />;
}
