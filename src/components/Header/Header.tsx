import logo from "../../assets/images/logo-full.svg";
import lines from "../../assets/images/pattern-squiggly-line-top.svg";

export const Header = () => {
  return (
    <div className="flex justify-center py-5 relative">
      <img className="w-40" src={logo} />
      <img className=" absolute right-0 top-2 max-w-30" src={lines}/>
    </div>
  );
};
