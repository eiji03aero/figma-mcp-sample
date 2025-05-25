import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals.ts";

// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000, // 5分間はキャッシュを使用
			gcTime: 10 * 60 * 1000, // 10分間キャッシュを保持
		},
	},
});

// Create a new router instance
const router = createRouter({
	routeTree,
	context: {},
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// サービスワーカーの登録
if ("serviceWorker" in navigator) {
	window.addEventListener("load", async () => {
		try {
			const registration = await navigator.serviceWorker.register("/sw.js");
			console.log("Service Worker registered successfully:", registration);

			// サービスワーカーの状態を監視
			registration.addEventListener("updatefound", () => {
				console.log("Service Worker update found");
			});

			// アクティブなサービスワーカーの状態変更を監視
			if (registration.active) {
				registration.active.addEventListener("statechange", () => {
					console.log(
						"Service Worker state changed:",
						registration.active?.state
					);
				});
			}
		} catch (error) {
			console.error("Service Worker registration failed:", error);
		}
	});
}

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</StrictMode>
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
