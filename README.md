## React App On Github Pages

參考網址: https://ithelp.ithome.com.tw/articles/10228423

參考網址: https://www.pluralsight.com/guides/deploying-react-on-github-pages 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### 步驟如下:

1 在 package.json 中加入 homepage，裡面放入 Github Page 的網址： "homepage": "https://iren034.github.io/ps-ghpages",

2 透過 yarn 安裝 gh-pages，這個工具可以幫助我們快速的把專案發佈到 Github Page： yarn add gh-pages

3 到 package.json 檔案中的 scripts 欄位中添加以下指令： 

    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build"

4 發布： npm run deploy 或 yarn run deploy

5 進到 Github 專案的設定頁面： 在 Source 選擇到的來源是 gh-pages branch 即可

### styled-components:

1 安裝: https://styled-components.com/docs/basics#installation

2 React-Styled Components 透過 ThemeProvider 來更換網頁色彩主題樣式： https://reurl.cc/WLO9Y5
import styled, { ThemeProvider } from 'styled-components';
