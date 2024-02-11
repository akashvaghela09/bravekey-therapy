import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ContactMe } from "./components/ContactMe/ContactMe";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />

      <div className="divider_wrapper">
        <div className="strock_line" />
        <p className="text_md">BE BRAVE, SEEK THERAPY.</p>
        <div className="strock_line" />
      </div>

      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
