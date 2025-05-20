import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

interface Project {
	code: string;
	name: string;
	process: string;
	gantt: string;
	startDate: string;
	endDate: string;
}

export const Route = createFileRoute("/case-2-2/")({
	component: Page,
});

function Page() {
	const [projects] = useState<Project[]>([
		{
			code: "code-hoge",
			name: "Hoge Project",
			process: "あり",
			gantt: "使用中",
			startDate: "2025-05-01",
			endDate: "2026-10-01",
		},
		{
			code: "code-hoge",
			name: "Hoge Project",
			process: "あり",
			gantt: "使用中",
			startDate: "2025-05-01",
			endDate: "2026-10-01",
		},
		{
			code: "code-hoge",
			name: "Hoge Project",
			process: "あり",
			gantt: "使用中",
			startDate: "2025-05-01",
			endDate: "2026-10-01",
		},
		{
			code: "code-hoge",
			name: "Hoge Project",
			process: "あり",
			gantt: "使用中",
			startDate: "2025-05-01",
			endDate: "2026-10-01",
		},
	]);

	return (
		<div className="flex h-screen">
			{/* Navigation */}
			<nav className="w-[200px] h-screen bg-white flex flex-col gap-8 py-8">
				<div className="px-2.5">
					<img
						src="/case-2-2-images/lenga-logo.png"
						alt="Lenga Logo"
						className="w-full"
					/>
				</div>
				<div className="flex flex-col flex-1">
					<a href="#" className="px-3 py-2 hover:bg-gray-100">
						タイムシート
					</a>
					<a href="#" className="px-3 py-2 hover:bg-gray-100">
						プロジェクト
					</a>
					<a href="#" className="px-3 py-2 hover:bg-gray-100">
						ガントチャート
					</a>
				</div>
			</nav>

			{/* Main Content */}
			<main className="flex-1 bg-gray-100 p-4">
				{/* Breadcrumb */}
				<div className="flex items-center gap-2 text-sm text-[#1C4371]">
					<a href="#">ホーム</a>
					<span>&gt;</span>
					<span>プロジェクト</span>
				</div>

				{/* Content Panel */}
				<div className="mt-4 bg-white rounded border border-gray-200">
					<div className="p-4">
						<h1 className="text-xl mb-3">プロジェクト</h1>

						{/* Filter Box */}
						<div className="border border-gray-200 rounded p-4 mb-4">
							<div className="grid grid-cols-2 gap-6 mb-4">
								<div className="flex items-center gap-2">
									<label className="w-24 text-right">キーワード</label>
									<input
										type="text"
										className="flex-1 border border-gray-200 rounded px-2 py-1"
									/>
								</div>
								<div className="flex items-center gap-2">
									<label className="w-24 text-right">進行状況</label>
									<input
										type="text"
										className="flex-1 border border-gray-200 rounded px-2 py-1"
									/>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-6 mb-4">
								<div className="flex items-center gap-2">
									<label className="w-24 text-right">取引先</label>
									<input
										type="text"
										className="flex-1 border border-gray-200 rounded px-2 py-1"
									/>
								</div>
								<div className="flex items-center gap-2">
									<label className="w-24 text-right">部署</label>
									<input
										type="text"
										className="flex-1 border border-gray-200 rounded px-2 py-1"
									/>
								</div>
							</div>
							<div className="flex justify-end gap-2">
								<button className="px-3 py-2 text-sm text-[#1C4371]">
									リセット
								</button>
								<button className="px-3 py-2 text-sm text-white bg-[#1C4371] rounded">
									検索
								</button>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex justify-end gap-2 mb-2">
							<button className="px-3 py-2 text-sm text-white bg-[#1C4371] rounded">
								新規作成
							</button>
							<button className="px-3 py-2 text-sm text-white bg-[#FF3333] rounded">
								削除
							</button>
						</div>

						{/* Project Table */}
						<div className="border border-gray-200">
							<table className="w-full">
								<thead>
									<tr className="border-b border-gray-200">
										<th className="w-[200px] px-3 py-2 text-left font-normal">
											コード
										</th>
										<th className="px-3 py-2 text-left font-normal">
											プロジェクト名
										</th>
										<th className="w-[120px] px-3 py-2 text-left font-normal">
											工程
										</th>
										<th className="w-[120px] px-3 py-2 text-left font-normal">
											ガント
										</th>
										<th className="w-[120px] px-3 py-2 text-left font-normal">
											開始日
										</th>
										<th className="w-[120px] px-3 py-2 text-left font-normal">
											終了日
										</th>
										<th className="w-[120px] px-3 py-2 text-left font-normal"></th>
									</tr>
								</thead>
								<tbody>
									{projects.map((project, index) => (
										<tr
											key={index}
											className={`border-b border-gray-200 ${index % 2 === 1 ? "bg-[#DFDFDF]" : ""}`}
										>
											<td className="px-3 py-3">{project.code}</td>
											<td className="px-3 py-3">{project.name}</td>
											<td className="px-3 py-3">{project.process}</td>
											<td className="px-3 py-3">{project.gantt}</td>
											<td className="px-3 py-3">{project.startDate}</td>
											<td className="px-3 py-3">{project.endDate}</td>
											<td className="px-3 py-3">
												<button className="px-3 py-2 text-sm text-white bg-[#1C4371] rounded">
													編集
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
