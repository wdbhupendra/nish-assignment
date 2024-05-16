import React,{useState,useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Drawer from "../components/Drawer";
function Layout() {
  const [isMobile, setIsMobile] = useState(false);
  const [openDrawer,setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 useEffect(()=>{
  if(openDrawer){
    document.querySelector('body').classList.add("is_drawer_open");
  }
  else {
    document.querySelector('body').classList.remove("is_drawer_open");
  }
 },[openDrawer])
  return (
    <div className="bg-[#161719]">
      <Header openDrawer={openDrawer} setOpenDrawer={()=>setOpenDrawer(!openDrawer)} />
      <div className="flex flex-wrap pt-[110px]">
      <div className="relative">
       
        {isMobile ? (
          <>
          {

          openDrawer && <Drawer />
          }
          </>
        
      ) : (
        <div className="sidebar-wrap bg-[#1F2225]">
        <Sidebar />
        </div>
      )}
        </div>
        <div className="main-content">
          <Outlet />
        </div>
        </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
