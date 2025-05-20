# figma-mcp-sample

- figma mcpの実験場

# Todo

# 実験

## 架空のサービスのLPを実装する

- [本来のデザイン](public/screenshots//original-design.png)

- 条件
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
  - [get_figma_dataレスポンスのサンプル](src/routes/case-1/get_figma_data_result.yml)
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
  - 長考した分もうちょっと内容を再現したものがでてきた
    - [すくしょ](public/screenshots/localhost_13000_case-3.png)

## Saas画面っぽいど

- claude-3.5-sonnetを使う
- 本来のデザイン: https://www.figma.com/design/ZIFRDlnwD904K0ZhDqt17c/Untitled?node-id=1-2&t=veROknvZaKkw7dNr-0

### Case 2-1: とりあえず作ってみた

- グループ化はauto layoutはほぼなし
- [でざいん](public/screenshots/Project%20list%20page%202-1.png)

- プロンプト

```
- このfigmaのデザインを元にUIを実装してください
  - https://www.figma.com/design/ZIFRDlnwD904K0ZhDqt17c/Untitled?node-id=1-2&t=veROknvZaKkw7dNr-0
  - `get_figma_data` toolを使ってfigmaからスタイルデータを取り寄せて
  - 取得したスタイルデータを忠実に再現したUIを実装して
  - 画像が必要な場合は`public/case-2-1-images`に配置して
- 実装は以下のテンプレートに沿いつつ、src/routes/case-2-1/index.tsxというファイルに実装して

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/case-2-1")({
	component: Page,
});

function Page() {
	return /* actual ui implementation comes here */
}
```

- 結果
  - UI実装だけではないぞ:
    - typescriptの型
    - 型を用いたレンダリングロジック
    - 四角形を置いただけでinputやボタンやtableと認識
  - UI実装そのものは、まだまだ無念
    - [すくしょ](public/screenshots/localhost_13000_case-2-1.png)
    - ナビゲーションが横にない
    - 検索設定の枠線が消えた
    - 検索ボタンが右寄せじゃない
    - 新規作成 / 削除ボタンが別の列じゃない
    - デザインにないチェックボックス (削除ボタンから気を利かせてくれた？)

### Case 2-2: Best practiceを当てる

- mcpのウェブサイトで[Best practice](https://www.framelink.ai/docs/best-practices)とされていたものを当てた
  - auto layout
  - naming group, frames
  - spacer (additional)
- [でざいん](public/screenshots/Project%20list%20page%202-2.png)

- プロンプト

```
- このfigmaのデザインを元にUIを実装してください
  - https://www.figma.com/design/ZIFRDlnwD904K0ZhDqt17c/Lenga-saas?node-id=5-2&t=qKrNigKpqDKjIxrD-4
  - `get_figma_data` toolを使ってfigmaからスタイルデータを取り寄せて
  - 取得したスタイルデータを忠実に再現したUIを実装して
  - 画像が必要な場合は`public/case-2-2-images`に配置して
- 実装は以下のテンプレートに沿いつつ、src/routes/case-2-2/index.tsxというファイルに実装して

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/case-2-2")({
	component: Page,
});

function Page() {
	return /* actual ui implementation comes here */
}
```

- 結果
  - 名前に応じて、程よい感じのコンポーネント切り出しをしてくれた
    - NavItem, FormInput
  - 出来栄えは80点といったところ
    - [すくしょ](public/screenshots/Project%20list%20page%202-2.png)
    - どこからもってきたのかわからないpadding
      - これだけは解せない。いまいちである
    - ページの横幅が固定の前提になっている
    - テーブルも横幅に可変にできていない
      - これはfigma側でfit containerにすべきところがfix valueになっていたのが原因
    - なぜか右寄せになったflex box
  - figmaサイドへの負担が高そう
    - 徹底した構造化をしなければいけないため
      - auto layout
      - fill container
      - hug
    - 見逃した分が手直しとしてそのまま返ってくる

---

# Thoughts

- apiに許可する権限によってできることが変わるかも？
  - 関係ありそうな項目
    - dev resources: Read and write to dev resources in files
    - File content: Read the contents of and render images from files
    - Library assets: Read data about individual components and styles
    - Library content: Read components and styles published from individual files
- 生成するごとに全然違う内容が出てくる
  - かなり推論して適当にやっているのだと思われる
- ui実装の精度はfigma側の作り方に依存するっぽい
  - 資格的にどうなっているかより、スタイルの機能が適切に当てられているかでうまく生成できるか変わりそう
    - auto layout
    - flow
