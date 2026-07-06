import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import ReviewPage from "@/pages/ReviewPage/ReviewPage";
import GuidePage from "@/pages/GuidePage/GuidePage";
import MainPage from "@/pages/MainPage/MainPage";
import PracticePage from "@/pages/PracticePage/PracticePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ReviewPage />} />
        <Route path="guide" element={<GuidePage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="practice" element={<PracticePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}