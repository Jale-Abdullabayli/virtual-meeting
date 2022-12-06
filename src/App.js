import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.scss';

function App() {
  return (
      <div className="app">
        <div className="left">
          <Header />
          <Main />
          <Footer />
        </div>
        <div className="right">
          <Sidebar />
        </div>
      </div>
  );
}

export default App;
