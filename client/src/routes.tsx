import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Test1 from "./pages/Test1";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<LoginForm />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/test1" element={<Test1 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
