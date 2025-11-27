import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "@components/layout/MainLayout";
import AboutMe from "@pages/aboutMe/AboutMe";
import Contact from "@pages/contact/Contact";
import Home from "@pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* ========== route - 1 ========= */}

        <Route index={true} element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        {/* ========== route - 2 ========= */}
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
{
  /* <h1>Mahmud Hassan Rafi</h1>
      <img
        src="src/assets/userImage.PNG"
        alt="userImage"
        className="w-50 h-50 rounded-full"
      /> */
}
