import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <nav id="primary-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div id="main">
        <Outlet />
      </div>
    </>
  );
}

export default App;
