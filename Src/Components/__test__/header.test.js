import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore"
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

it(" Should render button", ()=>{

    render(

        <BrowserRouter>

            <Provider store={appStore}>
 
               <Header />
 
            </Provider>
 
        </BrowserRouter>

    );

    const logInButton = screen.getByRole("button", {name :"Login"});

    //const logInButton = screen.getByText("Login");

    expect(logInButton).toBeInTheDocument();

})

it(" Should render button", ()=>{

    render(

        <BrowserRouter>

            <Provider store={appStore}>
 
               <Header />
 
            </Provider>
 
        </BrowserRouter>

    );

    const logInButton = screen.getByRole("button", {name :"Login"});

    fireEvent.click(logInButton);

    const logOutButton = screen.getByRole("button", {name :"Logout"});

    expect(logOutButton).toBeInTheDocument();

})