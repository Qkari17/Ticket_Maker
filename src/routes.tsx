import { createBrowserRouter } from "react-router";
import { Form } from "./components/Form/Form";
import { Ticket } from "./components/Ticket/Ticket";



export const routes = {
    FORM:{
        path:"/",
    },
    TICKET:{
        path: "/ticket"
    }
};

export const router = createBrowserRouter([
    {
        path: routes.FORM.path,
        element: <Form />,
    },
    {
        path: routes.TICKET.path,
        element: <Ticket />,
    },
]);