import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
    children?: React.ReactNode;
};
 
const Layout = ({ children }: LayoutProps) => (
  <div>
    <Navigation/>
      {children}
    <Footer />
  </div>
);
 
export default Layout;