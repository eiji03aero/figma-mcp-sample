export const canvasRenderer = {
	clearCanvas: (canvas: HTMLCanvasElement) => {
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// 背景色を設定
		ctx.fillStyle = "#f0f0f0";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	},

	drawCount: (canvas: HTMLCanvasElement, count: number) => {
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// カウンター数字を描画
		ctx.fillStyle = "#333";
		ctx.font = "bold 48px Arial";
		ctx.textAlign = "center";
		ctx.fillText(count.toString(), canvas.width / 2, 60);
	},

	drawAhoText: (canvas: HTMLCanvasElement) => {
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const ahoTexts = [
			"アホ！",
			"バカ！",
			"おバカさん！",
			"アホアホ～",
			"バカタレ！",
		];
		const randomText = ahoTexts[Math.floor(Math.random() * ahoTexts.length)];

		ctx.fillStyle = "#ff4444";
		ctx.font = "bold 32px Arial";
		ctx.textAlign = "center";
		ctx.fillText(randomText, canvas.width / 2, 120);
	},

	drawSkebeText: (canvas: HTMLCanvasElement) => {
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const skebeTexts = [
			"エッチ！",
			"スケベ！",
			"いやらしい～",
			"むっつり！",
			"スケベニン！",
		];
		const randomText =
			skebeTexts[Math.floor(Math.random() * skebeTexts.length)];

		ctx.fillStyle = "#ff69b4";
		ctx.font = "bold 32px Arial";
		ctx.textAlign = "center";
		ctx.fillText(randomText, canvas.width / 2, 120);
	},

	drawGretaAsciiArt: (canvas: HTMLCanvasElement) => {
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const gretaArt = [
			"  ∩───∩  ",
			" │ ● ● │ ",
			" │   ▲  │ ",
			" │  ___  │ ",
			"  ───────  ",
			"HOW DARE YOU!",
		];

		ctx.fillStyle = "#228B22";
		ctx.font = "bold 16px monospace";
		ctx.textAlign = "center";

		gretaArt.forEach((line, index) => {
			ctx.fillText(line, canvas.width / 2, 120 + index * 20);
		});
	},

	render: (canvas: HTMLCanvasElement, count: number) => {
		canvasRenderer.clearCanvas(canvas);
		canvasRenderer.drawCount(canvas, count);

		const isDivisibleBy3 = count % 3 === 0;
		const isDivisibleBy5 = count % 5 === 0;

		if (count === 0) {
			// 初期状態は何も追加で表示しない
			return;
		}

		if (isDivisibleBy3 && isDivisibleBy5) {
			canvasRenderer.drawGretaAsciiArt(canvas);
		} else if (isDivisibleBy3) {
			canvasRenderer.drawAhoText(canvas);
		} else if (isDivisibleBy5) {
			canvasRenderer.drawSkebeText(canvas);
		}
	},
};
