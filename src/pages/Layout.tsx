import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer";
import "../styles/Layout.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
