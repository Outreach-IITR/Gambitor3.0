import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }:any) => {
    return (
      <div className="dashboard-layout">
        <Sidebar/>
        <div className="dashboard-content close lg:w-[calc(100%-300px)] z-0 relative lg:left-[300px] px-5 w-full xl:min-w-[1140px] ">
          <Navbar/>
          {children}
        </div>
        
      </div>
    );
  };
  
  export default Layout;