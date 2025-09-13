# index.js
- Được lấy trên telegram BIGCHANG.
- Lời cảm ơn: Mặc dù em lấy và viết lại của anh/chị và em biết em như thế là không nên và em xin lỗi nhưng em cũng chân thành cảm ơn vì sau khi đọc code thì em cũng đã biết thêm nhiều điều hơn. Emm xin chân thành xin lỗi và cảm ơn ạ
<br>

# yourhomework.js

## 🔹 Cách 1: Chạy trực tiếp trong Console

1. Vào trang quiz trên **yourhomework.net**  
2. Mở **DevTools Console** (`F12` → tab **Console**)  
3. Copy & paste đoạn này rồi nhấn **Enter**:  

```js
fetch("https://raw.githubusercontent.com/nanibrah/oatdoheo/refs/heads/main/yourhomework.js").then(r=>r.text()).then(t=>document.head.appendChild(Object.assign(document.createElement("script"),{textContent:t})))
```

## 🔹 Cách 2: Sử dụng Extension/ứng dụng từ bên thứ 3
- Copy & paste đoạn này rồi nhấn Lưu:  
```js
// ==UserScript==
// @name         yourhomework.net cheat
// @namespace    https://yourhomework.net/
// @version      2.0
// @description  Tự động hiện đáp án đúng
// @author       https://github.com/nanibrah
// @match        https://yourhomework.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yourhomework.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    fetch("https://raw.githubusercontent.com/nanibrah/oatdoheo/refs/heads/main/yourhomework.js").then(r=>r.text()).then(t=>document.head.appendChild(Object.assign(document.createElement("script"),{textContent:t})))
})();
```
