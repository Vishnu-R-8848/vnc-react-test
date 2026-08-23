import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CustomCursor from "../components/layout/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans antialiased selection:bg-blue-200 selection:text-[#111827] flex flex-col justify-between p-4 sm:p-8">
      <CustomCursor />
      <Header />
      <div className="flex-1 w-full max-w-5xl mx-auto py-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
