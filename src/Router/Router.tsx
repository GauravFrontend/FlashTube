// Router.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SignUp from "../Pages/SignUp";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout Route */}
        <Route path="/" element={<MainLayout />}>
          {/* Nested routes inside MainLayout */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
