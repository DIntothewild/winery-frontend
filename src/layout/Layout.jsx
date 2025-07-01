
import { Outlet } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Header from '../Components/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
