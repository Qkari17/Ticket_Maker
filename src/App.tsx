import { RouterProvider } from "react-router";
import "./App.css";
import { Header } from "./components/Header/Header";
import { router } from "./routes";
import lines from "../src/assets/images/pattern-lines.svg";
import linesb from "../src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import linest from "../src/assets/images/pattern-squiggly-line-top.svg";
function App() {
  return (
    <div
      className="bg-[url(../src/assets/images/background-mobile.png)] md:bg-[url(../src/assets/images/background-tablet.png)] lg:bg-[url(../src/assets/images/background-desktop.png)] bg-cover
     w-screen 
      bg-center text-neutral-50 text-xl pt-3 font-inconsolata  "
    ><img src={lines} alt="lines" className="absolute top-0"/>
    <img src={linest} alt="lines" className="absolute invisible lg:visible top-10 right-0"/>
    <img src={linesb} alt="lines" className="absolute invisible lg:visible bottom-0 h-96"/>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
