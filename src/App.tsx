import { RouterProvider } from "react-router";
import "./App.css";
import { Header } from "./components/Header/Header";
import { router } from "./routes";

function App() {
  return (
    <div
      className=" bg-custom md:bg-custom-2  lg:bg-custom-3 bg-cover
     w-screen  bg-center text-neutral-50 text-xl pt-3 font-inconsolata"
    >
    <Header/>
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
