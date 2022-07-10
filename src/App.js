import About from "./ASSESTS/JS/about";
import Careers from "./ASSESTS/JS/careers";
import Contact from "./ASSESTS/JS/contact";
import Creators from "./ASSESTS/JS/creators";
import Events from "./ASSESTS/JS/events";
import Footer from "./ASSESTS/JS/footer";
import Header from "./ASSESTS/JS/header";
import Home from "./ASSESTS/JS/home";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Events />
      <Creators />
      <Careers />
      <Contact />
      <Footer />
      <Header />
    </div>
  );
}

export default App;
