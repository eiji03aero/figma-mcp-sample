# figma-mcp-sample

- figma mcpの実験場

# 実験

## 架空のサービスのLPを実装する

- [本来のデザイン](public/screenshots//original-design.png)

- 条件
  - tool
    - get_figma_data
    - download_figma_images
  - model
    - claude 3.5 sonnet
    - gpt-4.1
    - gemini-2.5-pro

### Case 1: 構造化データ x claude-3.5-sonnet

- プロンプト

```
- このfigmaのデザインを元にUIを実装してください
  - https://www.figma.com/design/M53YEShAY82LPda96Qp13Rxt/LENGA-Prototype?node-id=165-34&t=sh83ejt8QxfYCmD8-4
  - `get_figma_data` toolを使ってfigmaからスタイルデータを取り寄せて
  - 取得したスタイルデータを忠実に再現したデータを実装して
- 実装は以下のテンプレートに沿いつつ、src/routes/case-1/index.tsxというファイルに実装して

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/case-1")({
	component: Page,
});

function Page() {
	return /* actual ui implementation comes here */
}

```

- 結果
  - 画像を使っている場合はそれをfigmaからダウンロードして使ってくれる模様
  - 無念な内容
    - [すくしょ](public/screenshots/localhost_13000_case-1.png)

### Case 2: 構造化データ x gpt-4.1

- プロンプト

```
- このfigmaのデザインを元にUIを実装してください
  - https://www.figma.com/design/M53YEShAY82LPda96Qp13Rxt/LENGA-Prototype?node-id=165-34&t=sh83ejt8QxfYCmD8-4
  - `get_figma_data` toolを使ってfigmaからスタイルデータを取り寄せて
  - 取得したスタイルデータを忠実に再現したデータを実装して
- 実装は以下のテンプレートに沿いつつ、src/routes/case-2/index.tsxというファイルに実装して

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/case-2")({
	component: Page,
});

function Page() {
	return /* actual ui implementation comes here */
}
```

- 結果
  - case 1と全く同じUIがでてきた。どういうことなの
    - [すくしょ](public/screenshots/localhost_13000_case-2.png)

### Case 3: 構造化データ x gemini-2.5-pro

- プロンプト

```
- このfigmaのデザインを元にUIを実装してください
  - https://www.figma.com/design/M53YEShAY82LPda96Qp13Rxt/LENGA-Prototype?node-id=165-34&t=sh83ejt8QxfYCmD8-4
  - `get_figma_data` toolを使ってfigmaからスタイルデータを取り寄せて
  - 取得したスタイルデータを忠実に再現したデータを実装して
- 実装は以下のテンプレートに沿いつつ、src/routes/case-3/index.tsxというファイルに実装して

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/case-3")({
	component: Page,
});

function Page() {
	return /* actual ui implementation comes here */
}
```

- 結果
  - get_figma_dataの内容をすべてチャット内で列挙し始めてやばい
  - UIを実装するよと言い残して止まってしまった
  - 画像のダウンロードで止まってしまって実装どころではなかった
    - ダウンロードを5件ずつに区切ってやり始めた。賢い
  - 無駄なスタイリング
    - 随所にfontfamilyを指定している

# Thoughts

- apiに許可する権限によってできることが変わるかも？
  - 関係ありそうな項目
    - dev resources: Read and write to dev resources in files
    - File content: Read the contents of and render images from files
    - Library assets: Read data about individual components and styles
    - Library content: Read components and styles published from individual files
- 生成するごとに全然違う内容が出てくる
  - かなり推論して適当にやっているのだと思われる
