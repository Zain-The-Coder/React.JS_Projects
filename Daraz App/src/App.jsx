import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

import './App.css'

function App() {
   return (
    <>
    <header className="bg-[#f85606] pt-[1px] pb-[30px]">
    <Header />
    </header>
    <main>
      <Main />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )

}

export default App;
