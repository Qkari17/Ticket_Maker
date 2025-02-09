import { Input } from "../../ui/Input/Input";

export const Form = () => {
  return (
    <form className="flex flex-col gap-5 p-4">
      <div className="p-2 flex flex-col gap-2 ">
        <h1 className="font-bold text-2xl text-center">Your Journey to Coding <br/>Conf 2025 Starts Here!</h1>
        <h2 className="text-neutral-300 text-center text-lg">Secure your spot at next year's <br/>biggest coding conference.</h2>
      </div>
      <div className=""></div>
      <Input label="Full Name" autoFocus ></Input>
      <Input label="Email Address" placeholder="example@email.com"></Input>
      <Input label="GitHub Username" placeholder="@yourusername"></Input>
      <button type="submit" className="bg-button1 text-neutral-900 font-bold text-lg py-3 rounded-xl"> Generate My Ticket</button>
    </form>
  );
};
