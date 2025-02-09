import { useLocation } from "react-router";
import { RegistrationFormData } from "../Form/type";

export const Ticket = () => {
    const location = useLocation();
    const formData = location.state as RegistrationFormData; 
  
    return (
      <div>
        <h1>Congrats, {formData.fullname}! Your ticket is ready.</h1>
        <section>We've emailed</section>
      </div>
)};
