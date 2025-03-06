import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>登錄與註冊</title>
  <link rel="stylesheet" href="styles.css" />
  <header>
    <div className="logo">
      <h1>棠吉訶德</h1>
    </div>
    <nav className="nav-links">
      {/*主頁連結*/}
      <a href="index.html" className="nav-item">
        <img
          src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/home.png?raw=true"
          alt="Home Icon"
        />
        <span>主頁</span>
      </a>
      {/*春季連結*/}
      <a href="Spring.hmtl.html" className="nav-item">
        <img
          src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/ecology.png?raw=true"
          alt="Spring Icon"
        />
        <span>春季</span>
      </a>
      <a href="Summer.html" className="nav-item">
        <img
          src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/sun.png?raw=true"
          alt="Summer Icon"
        />
        <span>夏季</span>
      </a>
      <a href="Autumn.html" className="nav-item">
        <img
          src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/leaf.png?raw=true"
          alt="Autumn Icon"
        />
        <span>秋季</span>
      </a>
      <a href="Winter.html" className="nav-item">
        <img
          src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/snowflake.png?raw=true"
          alt="Winter Icon"
        />
        <span>冬季</span>
      </a>
      <a href="LogIn.html" className="nav-item">
        <img
          src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/person_man.png?raw=true"
          alt="Login Icon"
        />
        <span>登錄</span>
      </a>
    </nav>
    <nav className="header-nav">
      {/* 圖示加文字的按鈕 */}
      <a href="page2.html" id="icon-button" className="nav-item">
        <img
          src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/search.png?raw=true"
          alt="圖示"
          className="nav-icon"
        />
        <span className="nav-text">搜尋</span>
      </a>
      <a href="#" className="nav-item">
        <img
          src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/%E5%9C%96%E7%A4%BA%E5%90%8D%E7%A8%B1.png?raw=true"
          alt="圖示"
          className="nav-icon"
        />
        <span className="nav-text">語言</span>
      </a>
    </nav>
  </header>
  {/*----------------------------------------------------------------------------------------------------------------------------------------*/}
  <main>
    <div className="auth-container">
      {/* 登錄部分 */}
      <div className="login-section">
        <h2>登錄</h2>
        <form action="#" method="post">
          <label htmlFor="login-email">電子郵件</label>
          <input
            type="email"
            id="login-email"
            name="login-email"
            placeholder="輸入電子郵件"
            required=""
          />
          <label htmlFor="login-password">密碼</label>
          <input
            type="password"
            id="login-password"
            name="login-password"
            placeholder="輸入密碼"
            required=""
          />
          <button type="submit">登錄</button>
        </form>
      </div>
      {/* 註冊部分 */}
      <div className="register-section">
        <h2>註冊帳號</h2>
        <form action="#" method="post">
          <label htmlFor="register-email">電子郵件</label>
          <input
            type="email"
            id="register-email"
            name="register-email"
            placeholder="輸入電子郵件"
            required=""
          />
          <label htmlFor="register-password">密碼</label>
          <input
            type="password"
            id="register-password"
            name="register-password"
            placeholder="設定密碼"
            required=""
          />
          <label htmlFor="register-confirm-password">確認密碼</label>
          <input
            type="password"
            id="register-confirm-password"
            name="register-confirm-password"
            placeholder="再次輸入密碼"
            required=""
          />
          <button type="submit">註冊</button>
        </form>
      </div>
    </div>
  </main>
</>

  )
}

export default App
