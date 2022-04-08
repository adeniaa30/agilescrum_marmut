import Header from "./components/Header";
import Home from "./pages/Home";
import Information from "./pages/Information";
import History from "./pages/History";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-7xl m-auto">
      <Header />
      <Home />
      <History />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
