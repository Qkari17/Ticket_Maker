import "./App.css";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div
      className=" bg-custom md:bg-custom-2  lg:bg-custom-3 bg-cover
     w-screen h-screen bg-center text-neutral-50 text-xl pt-3"
    >
    <Header/>
   <Form/>
    </div>
  );
}

export default App;
