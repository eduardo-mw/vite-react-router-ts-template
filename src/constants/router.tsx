import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Root layout
import App from "../App.tsx";
import ErrorPage from "../error-page.tsx";

// Routes
import Home from "../routes/home.tsx";
import About from "../routes/about.tsx";

// createBrowserRouter enables client side routing
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Route>
  )
);
