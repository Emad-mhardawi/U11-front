import Navigation from "./Navigation"


const Layout = (props) => {
  return (
    <div style={{height:'100vh'}}>
      <Navigation/>
      {props.children}
      
    </div>
  );
};

export default Layout;