## React App On Github Pages

參考網址: https://ithelp.ithome.com.tw/articles/10228423

參考網址: https://www.pluralsight.com/guides/deploying-react-on-github-pages 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### 步驟如下:

在 package.json 中加入 homepage，裡面放入 Github Page 的網址： "homepage": "https://iren034.github.io/ps-ghpages",

透過 yarn 安裝 gh-pages，這個工具可以幫助我們快速的把專案發佈到 Github Page： yarn add gh-pages

到 package.json 檔案中的 scripts 欄位中添加以下指令：

"predeploy": "npm run build",
"deploy": "gh-pages -d build",

發布: npm run deploy

進到 Github 專案的設定頁面： 在 Source 選擇到的來源是 gh-pages branch 即可
