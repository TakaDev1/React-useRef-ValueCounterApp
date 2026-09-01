# React-useRef-ValueCounterApp

Reactの `useRef` を使って、現在の値と前回の値を管理・表示する練習用アプリです。

## 📌 概要

カウントアップするたびに、更新前の値を `useRef` に保存します。

`useState` で現在の値を管理し、`useRef` で前回の値を保持することで、現在の値と前回の値を画面上に表示します。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useState
* useRef

## 📂 コンポーネント構成

```text
src/
├── components/
│   ├── HandlePreviousValue.tsx
│   └── DisplayValue.tsx
├── App.tsx
└── main.tsx
```

### HandlePreviousValue.tsx

値の状態管理とカウントアップ処理を担当します。

* `useState` で現在の値を管理
* `useRef` で前回の値を保持
* ボタンがクリックされたときに前回の値を `ref` に保存
* 現在の値を1増加
* `DisplayValue` に現在の値と前回の値をPropsとして渡す

### DisplayValue.tsx

現在の値と前回の値を画面に表示します。

## 🔄 処理の流れ

```text
初期状態
   ↓
現在の値: 0
前回の値: 0
   ↓
カウントアップ
   ↓
現在の値をuseRefに保存
   ↓
useStateの値を+1
   ↓
再レンダリング
   ↓
現在の値: 1
前回の値: 0
```

さらにカウントアップすると、

```text
現在の値: 2
前回の値: 1
```

のように、常に1つ前の値が表示されます。

## 🔑 useRefによる前回値の保持

```tsx
const prevValueRef = useRef<number>(0);

const handleClick = () => {
  prevValueRef.current = value;
  setValue((prev) => prev + 1);
};
```

`useRef` の `current` プロパティに値を保存することで、レンダリング間で値を保持できます。

`useRef` の値を更新しても、それ自体では再レンダリングは発生しません。

このアプリでは `setValue` による再レンダリングが発生するため、更新された `prevValueRef.current` を画面に表示できます。

## 🎯 学習ポイント

* `useState` による状態管理
* `useRef` による値の保持
* `ref.current` の使い方
* StateとRefの違い
* 前回の値を保持する方法
* Propsによるデータの受け渡し
* コンポーネント分割
* TypeScriptによるPropsの型定義

## 🚀 起動方法

```bash
npm install
npm run dev
```

ブラウザでアプリを開き、「カウントアップ」ボタンをクリックすると、現在の値と前回の値が更新されます。
