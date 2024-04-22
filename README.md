# Web Components Sample

ブラウザ標準の Web Components API を試してみるリポジトリ  
[JavaScript/TypeScript勉強会 in 神戸](https://kansai-web-app-dev.connpass.com/event/314241) にて登壇するときの補足資料として使用した

## 構成

### 標準的なWeb Componentsの作成

MDNで説明されているWeb Components APIの標準的な使い方に則って作成したコンポーネントたち  
index.htmlを開くと作成方法別のリンクが表示される

- index.html
- craete_from_html_element.html
- create_new_custom_element_only_js.html
- create_new_custom_element_with_template.html
- components/
  - SimpleButton.js
  - Card.js
  - Tweet.js
- img
- app.css

### jsxっぽくやってみたかったコンポーネントの使い方

Web Component APIを使ってjsxぽいコンポーネントを作ってみた

- login.html
- components/login.js

### 個人的な理想の使い方（動かない）

Web Component APIをこんな感じに使いたかったというただの理想の書き方

- desired-component-style/*

### HTML Imports（廃止）のサンプルコード

W3Cに提案された [HTML Imports](https://www.w3.org/TR/html-imports/) のサンプルコード

- html-imports-introduction/*

### HTML Modulesのサンプルコード

廃止となった HTML Imports の代わりとして提案されている [HTML Modules](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/html-modules-explainer.md)のサンプルコード

- html-modules-introduction/*
