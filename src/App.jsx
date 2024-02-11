import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ContactMe } from "./components/ContactMe/ContactMe";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { Quote } from "./components/Quote/Quote";
import scrollIntoView from 'scroll-into-view-if-needed';
import { About } from "./components/About/About";

function App() {

  const handleScroll = (para) => {
    const node = document.getElementById(para);
    scrollIntoView(node, {
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className="App">
      <Header handleScroll={handleScroll} />
      <Hero />
      <Services />
      <About />
      <Quote />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
