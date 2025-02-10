import { RouterProvider } from "react-router";
import "./App.css";
import { Header } from "./components/Header/Header";
import { router } from "./routes";

function App() {
  return (
    <div
      className="bg-[url(../src/assets/images/background-mobile.png)] md:bg-[url(../src/assets/images/background-tablet.png)] lg:bg-[url(../src/assets/images/background-desktop.png)] bg-cover
     w-screen  bg-center text-neutral-50 text-xl pt-3 font-inconsolata  " 
    >
    <Header/>
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
// bg-custom md:bg-tablet lg:bg-custom-3
export default App;
