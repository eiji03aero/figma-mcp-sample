import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/case-2/")({
	component: Page,
});

function Page() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative h-screen">
				<img
					src="/case-2-images/malte-schmidt-474904-unsplash.png"
					alt="Hero background"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50" />
				<div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
					<img
						src="/case-2-images/lenga-logo.png"
						alt="LENGA Logo"
						className="w-48 mb-8"
					/>
					<h1 className="text-5xl font-bold mb-4 text-center leading-relaxed">
						次世代の留学を創るのは、
						<br />
						僕たちだ。
					</h1>
					<p className="text-2xl text-center leading-relaxed mb-8">
						LENGAは、
						<br />
						留学準備の新たな常識となる
						<br />
						情報プラットフォ一ムです。
					</p>
					<p className="text-xl">留学経験者　チュ一タ一事前登録ペ一ジ</p>
				</div>
			</section>

			{/* Vision Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold tracking-wider mb-2">VISION</h2>
						<p className="text-xl tracking-wider">ビジョン</p>
					</div>
					<div className="max-w-3xl mx-auto text-center">
						<h3 className="text-4xl mb-8">
							留学？
							<br />
							じゃあまず聞いてみよう。
						</h3>
						<div className="bg-[#1B486E] text-white rounded-[50px] py-8 px-12 mb-4">
							<p className="text-2xl leading-relaxed">
								留学情報提供を中心にした人財ネットワークを基盤に、
								<br />
								従来の留学経験をアップデートする。
							</p>
						</div>
						<button className="bg-[#1B486E] text-white rounded-[50px] py-4 px-8">
							▼ もっと読む
						</button>
					</div>
				</div>
			</section>

			{/* Pre-registration Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold tracking-wider mb-2">
							PRE-REGISTRATION
						</h2>
						<p className="text-xl tracking-wider">事前登録</p>
					</div>
					<div className="max-w-3xl mx-auto">
						<h3 className="text-4xl text-center mb-8">
							あなたの留学経験を
							<br />
							次世代に。
						</h3>
						<p className="text-2xl text-center mb-12">
							皆さんの貴重な経験・時間を使って、
							<br />
							"ただ"相談を受ける時代はもう終わりです。
						</p>
						<div className="space-y-8">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-[#2F5681] text-white rounded-full flex items-center justify-center text-2xl">
									①
								</div>
								<p className="text-2xl">あなたの貢献が交換可能なポイントに。</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-[#2F5681] text-white rounded-full flex items-center justify-center text-2xl">
									②
								</div>
								<p className="text-2xl">
									世代・国・分野を超えたネットワークに参画
								</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-[#2F5681] text-white rounded-full flex items-center justify-center text-2xl">
									③
								</div>
								<p className="text-2xl">
									あなたのコミットメントに感謝状を送付します
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Registration Form */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 max-w-xl">
					<div className="text-center mb-12">
						<h3 className="text-2xl font-bold mb-4">【 登録対象者 】</h3>
						<div className="text-lg space-y-4">
							<p>・親元を離れて海外教育機関に在籍した経験がある方</p>
							<p>・海外でのインターンシップ・ボランティア等の経験がある方</p>
						</div>
					</div>
					<div className="space-y-4">
						<input
							type="email"
							placeholder="メールアドレスを入力"
							className="w-full px-6 py-4 border border-gray-300 rounded-lg text-lg"
						/>
						<button className="w-full bg-[#2F5681] text-white py-4 rounded-lg text-xl">
							事前登録をする
						</button>
					</div>
					<p className="text-gray-600 text-center mt-8">
						事前登録頂いた方にはリリースに関するお知らせや
						<br />
						開発のアップデート情報をご案内させて頂きます。
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 text-center text-gray-600">
				<p>COPYRIGHT LENGA. All Rights Reserved.</p>
			</footer>
		</div>
	);
}
