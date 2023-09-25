import { Route, Routes } from "react-router-dom";
import { AdminHome, AppHome, ExampleHome } from "../pages/Index";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
    </Routes>
  );
};

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
    </Routes>
  );
};

export const ExampleRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleHome />} />
    </Routes>
  );
};
