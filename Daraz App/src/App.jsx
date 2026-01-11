import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Products from "./Components/Products/Products";
import ProductDetail from "./Components/Products/ProductDetail";
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className="bg-[#f85606] pt-[1px] pb-[30px]">
        <Header />
      </header>

      <main>
      <Routes>
        <Route path="/" element={<Main />} />       
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;