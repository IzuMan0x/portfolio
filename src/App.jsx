import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Modal from "./components/UI/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    console.log("made it here");
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <BrowserRouter>
      {showModal && <Modal />}

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact onShowModal={showModalHandler} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
