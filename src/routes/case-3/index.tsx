import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/case-3/")({
	component: Page,
});

function Page() {
	return (
		<div className="min-h-screen bg-white text-black">
			{/* Header */}
			<header className="py-4 px-8 shadow-md">
				<div className="container mx-auto flex justify-between items-center">
					<img
						src="/case-3-images/lenga-logo.png"
						alt="LENGA Logo"
						className="h-10"
					/>{" "}
					{/* Assuming lenga-logo.png is appropriate size */}
					<nav className="space-x-8">
						<a
							href="#"
							className="text-black font-medium hover:text-gray-700"
							style={{
								fontFamily: "Roboto, sans-serif",
								fontSize: "20px",
								fontWeight: 500,
							}}
						>
							PRE-REGISTRATION
						</a>
						<a
							href="#"
							className="text-black font-medium hover:text-gray-700"
							style={{
								fontFamily: "Roboto, sans-serif",
								fontSize: "20px",
								fontWeight: 500,
							}}
						>
							VISION
						</a>
						<a
							href="#"
							className="text-black font-medium hover:text-gray-700"
							style={{
								fontFamily: "Roboto, sans-serif",
								fontSize: "20px",
								fontWeight: 500,
							}}
						>
							SERVICE
						</a>
					</nav>
				</div>
			</header>

			{/* Hero Section */}
			<section
				className="relative text-white py-32 px-8 bg-cover bg-center"
				style={{
					backgroundImage: "url('/case-3-images/malte-schmidt-unsplash.png')",
				}}
			>
				<div className="absolute inset-0 bg-[#1B3551] opacity-75"></div>{" "}
				{/* Overlay from node 165:67 */}
				<div className="relative container mx-auto text-center">
					<h1
						className="mb-6"
						style={{
							fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
							fontSize: "48px",
							fontWeight: 400,
							lineHeight: "2.0288" /* 97.38px / 48px */,
						}}
					>
						次世代の留学を創るのは、
						<br />
						僕たちだ。
					</h1>
					<p
						className="mb-10"
						style={{
							fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
							fontSize: "30px",
							fontWeight: 400,
							lineHeight: "2.0623" /* 61.87px / 30px */,
						}}
					>
						LENGAは、
						<br />
						留学準備の新たな常識となる
						<br />
						情報プラットフォ一ムです。
					</p>
					<button
						className="px-10 py-4 rounded-[30px] text-white hover:opacity-90 transition-opacity"
						style={{
							backgroundColor: "#2F5681",
							fontFamily: "Roboto, sans-serif",
							fontSize: "20px",
							fontWeight: 700,
						}}
					>
						事前登録をする
					</button>
					<div className="flex justify-center space-x-4 mt-12">
						<a href="#" className="opacity-75 hover:opacity-100">
							<img
								src="/case-3-images/facebook-icon.png"
								alt="Facebook"
								className="h-8 w-8"
							/>{" "}
							{/* Node 165:125 */}
						</a>
						<a href="#" className="opacity-75 hover:opacity-100">
							<img
								src="/case-3-images/twitter-icon.png"
								alt="Twitter"
								className="h-8 w-8"
							/>{" "}
							{/* Node 165:128 */}
						</a>
					</div>
				</div>
			</section>

			{/* Vision Section */}
			<section className="py-16 px-8 container mx-auto text-center">
				<h2
					className="mb-2 text-black"
					style={{
						fontFamily: "Roboto, sans-serif",
						fontSize: "48px",
						fontWeight: 700,
						letterSpacing: "0.0833em",
					}}
				>
					VISION
				</h2>
				<p
					className="mb-4 text-black"
					style={{
						fontFamily: '".Hiragino Sans GB Interface", sans-serif',
						fontSize: "24px",
						letterSpacing: "0.0833em",
					}}
				>
					ビジョン
				</p>
				<div className="w-24 h-2 bg-[#C4C4C4] rounded-[10px] mx-auto mb-12"></div>{" "}
				{/* Decorative Rectangle 165:71 */}
				<p
					className="text-black mb-12 max-w-3xl mx-auto"
					style={{
						fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
						fontSize: "36px",
						lineHeight: "1.385",
					}}
				>
					留学をもっと踏み出しやすく。
					<br />
					留学をもっと充実したものに。
					<br />
					留学をもっと可能性を広げるチャレンジに。
					<br />
					<br />
					私たちが創るのは、
					<br />
					留学をデザイナブルにする"留学4.0時代"です。
				</p>
				<div
					className="my-12 p-8 rounded-[50px] text-white max-w-4xl mx-auto"
					style={{ backgroundColor: "#1B486E" }} // fill_T9AY9W from 165:85
				>
					<p
						style={{
							fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
							fontSize: "36px",
							lineHeight: "1.364",
						}}
					>
						留学情報提供を中心にした人財ネットワークを基盤に、
						<br />
						従来の留学経験をアップデートする。
					</p>
				</div>
				{/* Study Abroad Evolution - SVGs for arrows are missing */}
				<div className="my-16">
					<div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
						<div className="text-center">
							<p
								style={{
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "24px",
									color: "#C4C4C4",
								}}
							>
								留学1.0
								<br />
								＜国レベルの時代＞
							</p>
						</div>
						<span className="text-2xl text-black">&rarr;</span>{" "}
						{/* Placeholder for arrow SVG */}
						<div className="text-center">
							<p
								style={{
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "24px",
									color: "#979797",
								}}
							>
								留学2.0
								<br />
								＜エリート層の時代＞
							</p>
						</div>
						<span className="text-2xl text-black">&rarr;</span>{" "}
						{/* Placeholder for arrow SVG */}
						<div className="text-center">
							<p
								style={{
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "24px",
									color: "#000000",
								}}
							>
								留学3.0
								<br />
								＜大衆化の時代＞
							</p>
						</div>
						<span className="text-2xl text-black">&rarr;</span>{" "}
						{/* Placeholder for arrow SVG */}
						<div className="text-center">
							<p
								style={{
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "18px",
									color: "#000000",
									fontWeight: "bold",
								}}
							>
								留学4.0
								<br />
								＜パーソナライズド留学の時代＞
							</p>
						</div>
					</div>
				</div>
				<button
					className="mt-8 px-8 py-3 rounded-[50px] text-white hover:opacity-90 transition-opacity"
					style={{
						backgroundColor: "#1B486E",
						fontFamily: "Gothic A1, sans-serif",
						fontSize: "18px",
						fontWeight: 700,
					}}
				>
					▼ もっと読む
				</button>
			</section>

			{/* Service Section */}
			<section className="py-16 px-8 container mx-auto text-center">
				<h2
					className="mb-2 text-black"
					style={{
						fontFamily: "Roboto, sans-serif",
						fontSize: "48px",
						fontWeight: 700,
						letterSpacing: "0.0833em",
					}}
				>
					SERVICE
				</h2>
				<p
					className="mb-4 text-black"
					style={{
						fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
						fontSize: "24px",
						letterSpacing: "0.0833em",
					}}
				>
					サービス案内
				</p>
				<div className="w-24 h-2 bg-[#C4C4C4] rounded-[10px] mx-auto mb-12"></div>{" "}
				{/* Decorative Rectangle 165:74 */}
				<div className="flex flex-col md:flex-row items-center justify-center my-12 md:space-x-8">
					<img
						src="/case-3-images/image-2-41.png"
						alt="Service illustration"
						className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg mb-8 md:mb-0"
					/>
					<p
						className="text-black md:w-1/2"
						style={{
							fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
							fontSize: "48px",
							lineHeight: "1.385",
							letterSpacing: "0.1041em",
						}}
					>
						留学？
						<br />
						じゃあまず聞いてみよう。
					</p>
				</div>
				{/* Service Phases */}
				<div className="grid md:grid-cols-3 gap-12 my-16">
					{/* 留学前 */}
					<div className="text-left p-6 border border-gray-200 rounded-lg shadow-lg">
						<div className="flex items-center mb-4">
							<h3
								style={{
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "48px",
								}}
								className="text-black mr-2"
							>
								留学
							</h3>
							<div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2F5681] text-white">
								<span
									style={{
										fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
										fontSize: "72px",
										lineHeight: "1",
									}}
								>
									前
								</span>
							</div>
						</div>
						<p
							className="text-black mb-4"
							style={{
								fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
								fontSize: "36px",
								lineHeight: "1.395",
							}}
						>
							地域的・経済的な制約に関係なく、
							自分の興味・関心に合った具体的な情報を、
							必要なだけ、いつでも、どこでも。
						</p>
						<div className="flex space-x-2 mt-4 opacity-70">
							<img
								src="/case-3-images/calendar-icon.png"
								alt="Calendar"
								className="h-8 w-8"
							/>
							<img
								src="/case-3-images/train-icon.png"
								alt="Train"
								className="h-8 w-8"
							/>
							<img
								src="/case-3-images/piggy-bank-icon.png"
								alt="Piggy bank"
								className="h-8 w-8"
							/>
							{/* Add other icons from Group 11, 13, 14, 15 (nodes 165:133 to 165:140) if needed */}
						</div>
					</div>

					{/* 留学中 */}
					<div className="text-left p-6 border border-gray-200 rounded-lg shadow-lg">
						<div className="flex items-center mb-4">
							<h3
								style={{
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "48px",
								}}
								className="text-black mr-2"
							>
								留学
							</h3>
							<div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2F5681] text-white">
								<span
									style={{
										fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
										fontSize: "72px",
										lineHeight: "1",
									}}
								>
									中
								</span>
							</div>
						</div>
						<p
							className="text-black mb-4"
							style={{
								fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
								fontSize: "36px",
								lineHeight: "1.395",
							}}
						>
							今までは難しかった留学生同士の情報交換。
							同じ志を持った仲間とのプロジェクト。
							留学後にもつながる、かけがえのない繋がりを。
						</p>
						<div className="flex space-x-2 mt-4 opacity-70 flex-wrap">
							<img
								src="/case-3-images/flag-icon.png"
								alt="Flag"
								className="h-8 w-8"
							/>
							<img
								src="/case-3-images/building-icon-148.png"
								alt="Building"
								className="h-8 w-8"
							/>
							<img
								src="/case-3-images/globe-icon.png"
								alt="Globe"
								className="h-8 w-8"
							/>
							{/* image-4-144, image-4-2-145, image-4-4-146, image-4-3-147, image-4-3-150 could be more decorative background elements */}
						</div>
					</div>

					{/* 留学後 */}
					<div className="text-left p-6 border border-gray-200 rounded-lg shadow-lg">
						<div className="flex items-center mb-4">
							<h3
								style={{
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "48px",
								}}
								className="text-black mr-2"
							>
								留学
							</h3>
							<div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2F5681] text-white">
								<span
									style={{
										fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
										fontSize: "72px",
										lineHeight: "1",
									}}
								>
									後
								</span>
							</div>
						</div>
						<p
							className="text-black mb-4"
							style={{
								fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
								fontSize: "36px",
								lineHeight: "1.395",
							}}
						>
							キャリアフォーラムに集まった大企業への就職だけでなく、
							本当に自分に合った、自分が活きるキャリアを選ぶ。
							社会人になってからも価値あるグローバルな人脈。
						</p>
						<div className="flex space-x-2 mt-4 opacity-70 flex-wrap">
							<img
								src="/case-3-images/image-4-2-153.png"
								alt="Building group"
								className="h-8 w-8"
							/>{" "}
							{/* Simplified representation */}
							<img
								src="/case-3-images/building-icon-155.png"
								alt="Building"
								className="h-8 w-8"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Pre-Registration Section */}
			<section className="py-16 px-8 container mx-auto">
				<div className="text-center">
					<h2
						className="mb-2 text-black"
						style={{
							fontFamily: "Roboto, sans-serif",
							fontSize: "48px",
							fontWeight: 700,
							letterSpacing: "0.0833em",
						}}
					>
						PRE-REGISTRATION
					</h2>
					<p
						className="mb-4 text-black"
						style={{
							fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
							fontSize: "24px",
							letterSpacing: "0.0833em",
						}}
					>
						事前登録
					</p>
					<div className="w-24 h-2 bg-[#C4C4C4] rounded-[10px] mx-auto mb-12"></div>{" "}
					{/* Decorative Rectangle 165:77 */}
				</div>

				<div
					className="p-8 md:p-16 my-12 bg-cover bg-center rounded-lg shadow-xl"
					style={{
						backgroundImage: "url('/case-3-images/image-4-39.png')",
					}} /* Node 165:39 */
				>
					<div className="bg-white bg-opacity-80 p-8 rounded-lg">
						<h3
							className="text-center mb-8"
							style={{
								fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
								fontSize: "48px",
								color: "#2F5681" /* fill_G8XUAO */,
								lineHeight: "1.364",
							}}
						>
							留学経験者 事前登録フォーム
						</h3>
						<p
							className="text-center text-black mb-6"
							style={{
								fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
								fontSize: "48px",
								lineHeight: "1.395",
							}}
						>
							あなたの留学経験を
							<br />
							次世代に。
						</p>
						<p
							className="text-center text-black mb-10 max-w-3xl mx-auto"
							style={{
								fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
								fontSize: "36px",
								lineHeight: "1.417",
							}}
						>
							皆さんの貴重な経験・時間を使って、
							<br />
							"ただ"相談を受ける時代はもう終わりです。
							<br />
							LENGAのネットワークが、
							<br />
							あなたの留学を次のステージへ。
						</p>

						{/* Benefits */}
						<div className="space-y-8 my-12">
							{[
								{ num: "①", text: "あなたの貢献が交換可能なポイントに。" },
								{ num: "②", text: "世代・国・分野を超えたネットワークに参画" },
								{
									num: "③",
									text: "あなたのコミットメントに感謝状を送付します",
								},
							].map((item) => (
								<div key={item.num} className="flex items-center">
									<div
										className="flex items-center justify-center w-16 h-16 rounded-full text-white mr-6 shrink-0"
										style={{
											backgroundColor: "#2F5681" /* fill_G8XUAO */,
											fontFamily:
												'".Hiragino Kaku Gothic Interface", sans-serif',
											fontSize: "48px",
										}}
									>
										{item.num}
									</div>
									<p
										className="text-black"
										style={{
											fontFamily:
												'".Hiragino Kaku Gothic Interface", sans-serif',
											fontSize: "36px",
											lineHeight: "1.395",
										}}
									>
										{item.text}
									</p>
								</div>
							))}
						</div>

						{/* Process Illustration */}
						<div className="flex flex-col md:flex-row items-center justify-around my-16 space-y-8 md:space-y-0">
							<div className="text-center">
								<img
									src="/case-3-images/comment-icon-black.png"
									alt="Consult"
									className="h-16 w-16 mx-auto mb-2"
								/>
								<p
									className="text-black"
									style={{
										fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
										fontSize: "24px",
									}}
								>
									テキスト・ビデオ通話で
									<br />
									相談を受ける
								</p>
							</div>
							<div className="text-black text-4xl font-bold hidden md:block">
								&rarr;
							</div>
							<div className="text-center">
								<div className="flex justify-center mb-2">
									<img
										src="/case-3-images/coin-point-icon-162.png"
										alt="Points"
										className="h-16 w-16 mx-auto"
									/>
								</div>
								<p
									className="text-black"
									style={{
										fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
										fontSize: "24px",
									}}
								>
									ポイント獲得
								</p>
							</div>
							<div className="text-black text-4xl font-bold hidden md:block">
								&rarr;
							</div>
							<div className="text-center">
								<img
									src="/case-3-images/present-icon.png"
									alt="Exchange"
									className="h-16 w-16 mx-auto mb-2"
								/>
								<p
									className="text-black"
									style={{
										fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
										fontSize: "24px",
									}}
								>
									ポイントを交換
								</p>
							</div>
						</div>

						{/* Registration Criteria */}
						<div className="my-12 p-6 bg-gray-50 rounded-lg">
							<h4
								className="text-center text-black mb-4"
								style={{
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "36px",
									fontWeight: "bold",
								}}
							>
								【 登録対象者 】
							</h4>
							<p
								className="text-black text-left"
								style={{
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "24px",
									lineHeight: "1.395",
								}}
							>
								・親元を離れて海外教育機関に在籍した経験がある方
								<br />
								<br />
								・海外でのインターンシップ・ボランティア等の経験がある方
								<br />
								<br />
								例<br />
								語学留学・交換留学・短期留学・学位取得留学（学士・修士・博士）・在外研究・ボーディングスクール留学・日本で所属する大学の海外研修
								<br />
								<br />
								※いわゆる帰国子女の方、留学国以外で生まれ育った方であれば、日本の教育機関（小学校・中学校・高校・大学）に在籍した経験がなくてもご登録いただけます。
							</p>
						</div>

						{/* Email Form */}
						<div className="my-12 flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
							<div
								className="w-full md:w-2/3 h-16 bg-no-repeat bg-center bg-contain flex items-center px-4 rounded-[5px] border border-[rgba(16,14,14,0.25)]"
								style={{
									backgroundImage:
										"url('/case-3-images/rectangle-input-bg-64.png')",
								}} /* Node 165:64 */
							>
								<input
									type="email"
									placeholder="メールアドレスを入力"
									className="w-full bg-transparent outline-none placeholder-gray-500"
									style={{
										fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
										fontSize: "24px",
									}} /* style_ZSM16W simplified */
								/>
							</div>
							<button
								className="w-full md:w-auto px-12 py-4 text-white rounded-[5px] hover:opacity-90 transition-opacity"
								style={{
									backgroundColor:
										"#2F5681" /* fill_G8XUAO, fallback for SVG bg */,
									fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
									fontSize: "36px",
									fontWeight: 400,
								}}
							>
								確認
							</button>
						</div>

						<p
							className="text-center mt-8"
							style={{
								fontFamily: '".Hiragino Kaku Gothic Interface", sans-serif',
								fontSize: "30px",
								color: "#4B4B4B" /* fill_RMIDNP */,
								lineHeight: "1.403",
							}}
						>
							事前登録頂いた方にはリリースに関するお知らせや
							<br />
							開発のアップデート情報をご案内させて頂きます。
						</p>
					</div>
				</div>
			</section>

			{/* Footer Placeholder */}
			<footer className="mt-12 py-8 bg-gray-100 text-center">
				<p className="text-gray-600">COPYRIGHT LENGA. All Rights Reserved.</p>{" "}
				{/* From node 165:83 */}
			</footer>
		</div>
	);
}
