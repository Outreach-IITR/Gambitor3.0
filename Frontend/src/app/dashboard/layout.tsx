import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }:any) => {
    return (
      <div className="dashboard-layout">
        <Sidebar/>
        <div className="dashboard-content close lg:w-[calc(100%-300px)] z-0 lg:h-screen relative lg:left-[300px] min-w-[650px] w-full xl:min-w-[1140px] ">
          <Navbar/>
          {children}
        </div>
        
      </div>
    );
  };
  
  export default Layout;