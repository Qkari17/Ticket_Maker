import { Navigate, useLocation } from "react-router";
import { RegistrationFormData } from "../Form/type";
import ticket from "../../assets/images/pattern-ticket.svg";
import logo from "../../assets/images/logo-mark.svg";
import github from "../../assets/images/icon-github.svg";
import line from "../../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
export const Ticket = () => {
  const location = useLocation();
  const formData = location.state as RegistrationFormData;

  console.log(formData.file);

  if (!formData) {
    return <Navigate to="/" />;
  }

  const fileUrl = URL.createObjectURL(formData.file);

  return (
    <div className="h-screen flex flex-col gap-20 p-4 items-center relative">
      <div className="flex-col flex gap-4 items-center md:px-20">
        <h1 className="font-bold text-2xl text-center md:text-4xl">
          Congrats,{" "}
          <span className="bg-gradient-to-r from-button1 to-white bg-clip-text text-transparent">
            {formData.fullname}
          </span>
          ! <br />
          Your ticket is ready.
        </h1>
        <p className="text-center  text-neutral-400 text-lg">
          We've emailed your ticket to <br />
          <span className="text-button1">{formData.email} </span>and will send
          updates in the run up to the event.
        </p>
      </div>
      <div className="relative   ">
        <img src={ticket} alt="ticket" />
        <div className="absolute top-0 left-0  h-full w-full  flex justify-between  p-3 pr-0  md:p-5">
          <div className="flex flex-col h-full justify-between">
            <div className="flex gap-3">
              <img src={logo} alt="logo" className="w-14 " />
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl md:text-3xl">Coding Conf</h2>
                <p className="text-sm text-neutral-400 tracking-wide md:text-lg">
                  June 29, 2025 / Poznań
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={fileUrl} alt="avatar" className="w-14 h-14" />
              <div>
                <h2 className="md:text-3xl">{formData.fullname}</h2>
                <p className="flex text-sm text-neutral-400 md:text-xl gap-2">
                  <img src={github} alt="github" />@{formData.username}
                </p>
              </div>
            </div>
          </div>
          <div className="  flex items-center ">
            <p className="rotate-90 text-neutral-400 md:text-3xl">#01609</p>
          </div>
        </div>
      </div>
      <img className="absolute bottom-0 left-0 md:h-60 lg:hidden" src={line} alt="line" />
    </div>
  );
};
