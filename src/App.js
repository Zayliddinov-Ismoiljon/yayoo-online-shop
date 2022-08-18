import Header from "./Component/Header/Header";

import "./App.css"
import Main from "./Component/Main/Main";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <header>
      <div className="container">
      <Header/>
      </div>
      </header>

      <main>
        <div className="container">
        <Main/>
        </div>
      </main>

      <footer>
        <div className="container">
          <Footer/>
        </div>
      </footer>

    </>
  );
}

export default App;
