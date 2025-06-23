import "./App.scss";
import { useState, useEffect } from "react";
function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );
  }, [theme]);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <section className="left">
            <h3>Social Media Dashboard</h3>
            <p>Total Followers: 23,004</p>
          </section>
          <section className="right">
            <p>Dark Mode</p>
            <button
              onClick={() => setTheme((prev) => !prev)}
              className={theme ? "dark" : "light"}
            >
              <span></span>
            </button>
          </section>
        </div>
      </header>
      <main>
        <section className="top">
          <ul>
            <li className="facebook">
              <div>
                <img src="/images/icon-facebook.svg" alt="facebook" />
                <p>@nathanf</p>
              </div>
              <h2>
                1987 <span>Followers</span>
              </h2>
              <p className="up">
                <img src="/images/icon-up.svg" alt="up" />
                12 Today
              </p>
            </li>
            <li className="twitter">
              <div>
                <img src="/images/icon-twitter.svg" alt="twitter" />
                <p>@nathanf</p>
              </div>
              <h2>
                1044 <span>Followers</span>
              </h2>
              <p className="up">
                <img src="/images/icon-up.svg" alt="up" />
                99 Today
              </p>
            </li>
            <li className="instagram">
              <div>
                <img src="/images/icon-instagram.svg" alt="instagram" />
                <p>@realnathanf</p>
              </div>
              <h2>
                11k <span>Followers</span>
              </h2>
              <p className="up">
                <img src="/images/icon-up.svg" alt="up" />
                1099 Today
              </p>
            </li>
            <li className="youtube">
              <div>
                <img src="/images/icon-youtube.svg" alt="youtube" />
                <p>Nathan F.</p>
              </div>
              <h2>
                8239 <span>SUBSCRIBERS</span>
              </h2>
              <p className="down">
                <img src="/images/icon-down.svg" alt="down" />
                144 Today
              </p>
            </li>
          </ul>
        </section>
        <section className="bottom">
          <h3>Overview - Today</h3>
          <ul>
            <li>
              <div>
                <h5>Page Views</h5>{" "}
                <img src="/images/icon-facebook.svg" alt="facebook" />
              </div>
              <div>
                <h2>87</h2>{" "}
                <p className="up">
                  <img src="/images/icon-up.svg" alt="up" />
                  3%
                </p>
              </div>
            </li>
            <li>
              <div>
                <h5>Likes</h5>{" "}
                <img src="/images/icon-facebook.svg" alt="facebook" />
              </div>
              <div>
                <h2>52</h2>{" "}
                <p className="down">
                  <img src="/images/icon-down.svg" alt="down" />
                  2%
                </p>
              </div>
            </li>{" "}
            <li>
              <div>
                <h5>Likes</h5>{" "}
                <img src="/images/icon-instagram.svg" alt="instagram" />
              </div>
              <div>
                <h2>5462</h2>{" "}
                <p className="up">
                  <img src="/images/icon-up.svg" alt="up" />
                  2257%
                </p>
              </div>
            </li>{" "}
            <li>
              <div>
                <h5>Profile Views</h5>{" "}
                <img src="/images/icon-instagram.svg" alt="instagram" />
              </div>
              <div>
                <h2>52k</h2>
                <p className="up">
                  <img src="/images/icon-up.svg" alt="up" />
                  1375%
                </p>
              </div>
            </li>{" "}
            <li>
              <div>
                <h5>Retweets</h5>{" "}
                <img src="/images/icon-twitter.svg" alt="twitter" />
              </div>
              <div>
                <h2>117</h2>{" "}
                <p className="up">
                  <img src="/images/icon-up.svg" alt="up" />
                  303%
                </p>
              </div>
            </li>{" "}
            <li>
              <div>
                <h5>Likes</h5>{" "}
                <img src="/images/icon-twitter.svg" alt="twitter" />
              </div>
              <div>
                <h2>507</h2>{" "}
                <p className="up">
                  <img src="/images/icon-up.svg" alt="up" />
                  553%{" "}
                </p>
              </div>
            </li>{" "}
            <li>
              <div>
                <h5>Likes</h5>{" "}
                <img src="/images/icon-youtube.svg" alt="youtube" />
              </div>
              <div>
                <h2>107</h2>{" "}
                <p className="down">
                  <img src="/images/icon-down.svg" alt="down" />
                  19%
                </p>
              </div>
            </li>{" "}
            <li>
              <div>
                <h5>Total Views</h5>{" "}
                <img src="/images/icon-youtube.svg" alt="youtube" />
              </div>
              <div>
                <h2>1407</h2>{" "}
                <p className="up">
                  <img src="/images/icon-down.svg" alt="down" />
                  12%{" "}
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
