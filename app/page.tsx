import Header from "./components/Common/Header/Header";
import SideBar from "./components/Common/Sidebar/SideBar";
import Categories from "./components/Home/Categories/Categories";
import HeroSection from "./components/Home/Hero/HeroSection";
import MenuSection from "./components/Home/Menu/MenuSection";
import Promos from "./components/Home/Promos/Promos";
import Footer from "@/app/components/Common/Footer/Footer";
import {Toaster} from "react-hot-toast";


export default function Home() {
    return (
        <main className="">
            <Toaster position={"top-right"} reverseOrder={true} />
            <Header/>
            <SideBar/>
            <HeroSection/>
            <Promos/>
            <Categories/>
            <MenuSection/>
            <Footer/>
        </main>
    )
}
