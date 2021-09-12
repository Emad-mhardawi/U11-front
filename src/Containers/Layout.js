import Footer from "../Components/Footer"
import Navigation from "./Navigation"


const Layout = (props) => {
  return (
    <div style={{height:'100vh'}}>
      <Navigation/>
      {props.children}
      <Footer/>
    </div>
  );
};

export default Layout;