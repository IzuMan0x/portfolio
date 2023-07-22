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
      {showModal && (
        <Modal onClose={hideModalHandler}>
          <div className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl z-40">
            <div
              onClick={hideModalHandler}
              className="relative -top-5 -left-9 ml-auto inline-flex text-2xl cursor-pointer"
            >
              X
            </div>
            Thank you for your message! I will get back to you soon!
          </div>
        </Modal>
      )}

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
