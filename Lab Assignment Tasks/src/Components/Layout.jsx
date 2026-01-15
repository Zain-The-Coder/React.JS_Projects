import { Header, Sidebar, Footer } from "./LayoutComp";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <div className="flex flex-col md:flex-row flex-1">
=        <Sidebar />

        <main className="flex-1 p-4 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">DESCRIPTION</h3>
          <p className="text-sm md:text-base italic text-gray-500 mb-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia tempore unde temporibus optio dolor, consequatur architecto, totam non perspiciatis impedit aspernatur dolores, quae dolorem rerum reprehenderit expedita odio saepe?
          </p>
          <p className="text-base md:text-lg italic text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quasi eveniet corrupti odit assumenda libero. Numquam obcaecati hic, dolorem nam illum atque illo est error, tempore assumenda voluptatibus ipsa. Facere!
          </p>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
