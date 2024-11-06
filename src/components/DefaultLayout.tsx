import { Outlet } from "react-router-dom";
import Header from "./atoms/layouts/Header";
import Footer from "./atoms/layouts/Footer";

export default function DefaultLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="bg-slate-200">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
