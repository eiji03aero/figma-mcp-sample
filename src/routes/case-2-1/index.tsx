import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/case-2-1/")({
	component: Page,
});

interface Project {
	code: string;
	name: string;
	hasProcess: string;
	ganttStatus: string;
	startDate: string;
	endDate: string;
}

function Page() {
	const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

	const projects: Project[] = [
		{
			code: "code-hoge",
			name: "Hoge project",
			hasProcess: "あり",
			ganttStatus: "使用中",
			startDate: "2025-05-01",
			endDate: "2026-10-01",
		},
		{
			code: "code-hoge",
			name: "Hoge project",
			hasProcess: "あり",
			ganttStatus: "使用中",
			startDate: "2025-05-01",
			endDate: "2026-10-01",
		},
		{
			code: "code-hoge",
			name: "Hoge project",
			hasProcess: "あり",
			ganttStatus: "使用中",
			startDate: "2025-05-01",
			endDate: "2026-10-01",
		},
		{
			code: "code-hoge",
			name: "Hoge project",
			hasProcess: "あり",
			ganttStatus: "使用中",
			startDate: "2025-05-01",
			endDate: "2026-10-01",
		},
		{
			code: "code-hoge",
			name: "Hoge project",
			hasProcess: "あり",
			ganttStatus: "使用中",
			startDate: "2025-05-01",
			endDate: "2026-10-01",
		},
	];

	const toggleProjectSelection = (code: string) => {
		setSelectedProjects((prev) =>
			prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
		);
	};

	return (
		<div className="min-h-screen bg-[#EEEEEE]">
			{/* Navigation */}
			<nav className="h-16 bg-white border-b border-[#AAAAAA] flex items-center px-4">
				<div className="w-[180px] h-full flex items-center">
					<img
						src="/case-2-1-images/lenga-logo.png"
						alt="LENGA"
						className="h-8"
					/>
				</div>
				<div className="flex gap-8 ml-8">
					<div className="text-black">プロジェクト</div>
					<div className="text-black">タイムシート</div>
					<div className="text-black">ガントチャート</div>
				</div>
			</nav>

			{/* Breadcrumb */}
			<div className="bg-white px-4 py-2 flex gap-2 text-[#1C4371]">
				<span>ホーム</span>
				<span>{">"}</span>
				<span>プロジェクト</span>
			</div>

			{/* Main Content */}
			<div className="p-4">
				<div className="bg-white border border-[#DFDFDF] rounded">
					{/* Header */}
					<div className="p-4">
						<h1 className="text-xl mb-4">プロジェクト</h1>

						{/* Search Form */}
						<div className="grid grid-cols-3 gap-4 mb-4">
							<div>
								<label className="block mb-1">キーワード</label>
								<input
									type="text"
									className="w-full border border-[#CCCCCC] rounded px-2 py-1"
								/>
							</div>
							<div>
								<label className="block mb-1">キーワード</label>
								<input
									type="text"
									className="w-full border border-[#CCCCCC] rounded px-2 py-1"
								/>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-4 items-center">
							<button className="bg-[#1C4371] text-white px-4 py-1 rounded-lg">
								検索
							</button>
							<button className="text-[#1C4371]">リセット</button>
							<button className="bg-[#1C4371] text-white px-4 py-1 rounded-lg ml-auto">
								新規作成
							</button>
							<button className="bg-[#FF3333] text-white px-4 py-1 rounded-lg">
								削除
							</button>
						</div>
					</div>

					{/* Table */}
					<div className="px-4">
						<table className="w-full border-t border-[#CCCCCC]">
							<thead>
								<tr className="border-b border-[#CCCCCC]">
									<th className="py-2 font-normal text-left">
										<input
											type="checkbox"
											onChange={() =>
												setSelectedProjects(
													selectedProjects.length === projects.length
														? []
														: projects.map((p) => p.code)
												)
											}
										/>
									</th>
									<th className="py-2 font-normal text-left">コード</th>
									<th className="py-2 font-normal text-left">プロジェクト名</th>
									<th className="py-2 font-normal text-left">工程</th>
									<th className="py-2 font-normal text-left">ガント</th>
									<th className="py-2 font-normal text-left">開始日</th>
									<th className="py-2 font-normal text-left">終了日</th>
									<th className="py-2 font-normal text-left"></th>
								</tr>
							</thead>
							<tbody>
								{projects.map((project, index) => (
									<tr
										key={index}
										className={`border-b border-[#CCCCCC] ${
											index % 2 === 1 ? "bg-[#DFDFDF]" : ""
										}`}
									>
										<td className="py-2">
											<input
												type="checkbox"
												checked={selectedProjects.includes(project.code)}
												onChange={() => toggleProjectSelection(project.code)}
											/>
										</td>
										<td className="py-2">{project.code}</td>
										<td className="py-2">{project.name}</td>
										<td className="py-2">{project.hasProcess}</td>
										<td className="py-2">{project.ganttStatus}</td>
										<td className="py-2">{project.startDate}</td>
										<td className="py-2">{project.endDate}</td>
										<td className="py-2">
											<button className="bg-[#1C4371] text-white px-4 py-1 rounded-lg">
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
		</div>
	);
}
