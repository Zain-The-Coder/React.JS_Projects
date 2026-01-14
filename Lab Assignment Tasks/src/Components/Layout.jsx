import { Header , Sidebar , Footer } from "./LayoutComp";

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};
export default Layout ;