### 學習筆記

---

頁面結構

- 首頁 11.16 completed
- Routepage 探索路線

  - SearchRoute 搜尋路線 11.18 completed
  - ResultRoute 搜尋結果

    - Card

    【取得自行車道路線】

    1. 在 <Routepage/> 設定取得資料的 _onFunction_ 和資料的 **state**。
    2. _onFunction_ 傳入 <SearchRoute/> ，每當輸入 select&input 執行 _onFunction_。
    3. 將 <Routepage/> 取得的資料 **state**，當作 **props** 傳入 <ResultRoute/> -> <Card/>

- Stationpage 尋找站點

  - SearchStation 搜尋站點 (switch/city/keywords)
  - ResultStation 搜尋結果

    - Map (座標)

  (dafault) show <Banner/> & <SearchStation/>
  (state 1.)
  if ( input#navigator || button.onClick )
  <Map/>

  (功能 1.) 開定位 -> 顯示附近站點
  (功能 2.) 搜尋 -> 關定位&顯示搜尋站點

  營運狀態(暫停-白): /v2/Bike/Availability/{City}
  車位(正常-綠/暫停-白): /v2/Bike/Availability/{City}

  【取得定位】

  1. 在 <Stationpage/> 設定取得資料的 _onFunction_ 和 定位 input.checkbox 的 **state**。
  2. _onFunction_ 傳入 <SearchRoute/> ，每當輸入 select&input 執行 _onFunction_。
  3. 將 <Routepage/> 取得的資料 **state**，當作 **props** 傳入 <ResultRoute/> -> <Card/>

---

### **應用的函式庫**

- [react-router-dom](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md) : SPA 用路由

  1. connect your app to the browser's URL: import `BrowserRouter`
  2. import `Link` and add some global navigation
  3. import {
     BrowserRouter,
     Routes,
     Route
     } from "react-router-dom";

- [jsSHA](https://www.npmjs.com/package/jssha): tdx api 驗證用
- [fontawesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react): 素材
- [leaflet](https://leafletjs.com/download.html)
- (未使用)[react-leaflet](https://react-leaflet.js.org/docs/start-installation/)

---

**可能會犯的錯誤**

- 圖片引入方式: import 進 react ; src 不能引入 https
- \_scss 引入不用加檔名
- 字體用 @import: url() 引入 scss
- .env

  - **token 的隱藏方式**

  1. 不用輸入;分號當句尾
  2. 注意取名&呼叫方式
  3. 修改後要重新運行 npm start

  - **leaflet**
  - \*刪除 node_modules/的.cache/ [react-leaflet 修復](https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat)

  - 錯誤訊息:
  - [Error: Map container not found](https://stackoverflow.com/questions/42647735/leaflet-map-container-not-found)

    ```
    The div id="map" must be added to the dom before calling L.map('map').
    ```

    可以用 `useEffect` 解決( 生命週期: 先 render 後 ComponentDidMount )

  - [Error: Map container is already initialized.](https://stackoverflow.com/questions/19186428/refresh-leaflet-map-map-container-is-already-initialized)

---

#### 常用

- .env : **token 的隱藏方式**
- helper.js : **global function**

- **flex**

  ```
  .flex_container {
    width: ??rem;
  }
  .flex_item {
          // 放大不超過350px
          flex: 1 1 100%;
          max-width: 350px;
  }
  ```

  ```
  .flex_item {
      // 最小多寬；以上放大
      flex: 0 1 30%; // 一排三個
      height: 15vw;
      min-width: 200px; // > 200px時放大
  }
  ```

  優先級

  flex-basis > min-width > width > max-width
  ( or _height_ whenever flex-direction: column )
  ( except flex-basis: auto)

- **arr.map()**

  ```
  let new_array = arr.map(function callback( currentValue[, index[, array]]) {
      // return element for new_array
  }[, thisArg])
  ```

- **useEffect**

  1. 資料 fetch、設定 subscription、或手動改變 React component 中的 DOM 都是 side effect。
  2. 告訴 React 你的 component 需要在 render 後做一些事情。React 將記住你傳遞的 function（我們將其稱為「effect」），並在執行 DOM 更新之後呼叫它。
  3. 每次 render 後都會執行 useEffect; 在第一個 render 和隨後每一個更新之後執行。

```

```

參考資料:

- [使用 Effect Hook – React](https://zh-hant.reactjs.org/docs/hooks-effect.html)
- [proto.io(滑動開關產生器)](https://proto.io/freebies/onoff/)
- [CRA 部署](https://create-react-app.dev/docs/deployment/)
