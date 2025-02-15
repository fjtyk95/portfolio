## SpecStory

## GitHub Pages Deployment and index.html (2025/2/15 8:48:51)

_**User**_

githubでデプロイするときindex.htmlは不要？

---

_**Assistant**_

はい、React アプリケーションで GitHub Pages にデプロイする場合、通常 `index.html` ファイルを直接作成する必要はありません。その理由は：

1. Create React App や Vite などのビルドツールが、ビルド時に自動的に `index.html` を生成します。

2. ビルド時に生成される `index.html` には、必要な設定やスクリプトの参照が自動的に含まれます。

ただし、GitHub Pages でデプロイする際に注意すべき点があります：

1. `package.json` に `homepage` フィールドを追加する必要があります：
```json
{
  "homepage": "https://あなたのユーザー名.github.io/リポジトリ名"
}
```

2. デプロイ用のスクリプトを `package.json` に追加することをお勧めします：
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. `gh-pages` パッケージをインストールする必要があります：
```bash
npm install --save-dev gh-pages
```

なお、現在表示されている `Header.tsx` は問題なく実装されていますが、GitHub Pages でデプロイする際はリンクのパスを調整する必要があるかもしれません：

```typescript:src/components/Header.tsx
// ... existing code ...
        <ul className="flex space-x-4">
          <li><a href={`${process.env.PUBLIC_URL}/#about`}>About</a></li>
          <li><a href={`${process.env.PUBLIC_URL}/#projects`}>Projects</a></li>
          <li><a href={`${process.env.PUBLIC_URL}/#skills`}>Skills</a></li>
          <li><a href={`${process.env.PUBLIC_URL}/#contact`}>Contact</a></li>
        </ul>
// ... existing code ...
```

これにより、サブディレクトリにデプロイされた場合でも正しくリンクが機能するようになります。

---



---

