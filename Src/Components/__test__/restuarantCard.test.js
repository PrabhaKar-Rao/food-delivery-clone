import { render, screen } from "@testing-library/react"
import RestroCard from "../RestroCard";
import MOCK_DATA from "../../mocks/restuarantCardMockData.json";
import "@testing-library/jest-dom"


it("Should render res card dat", ()=>{

    render(<RestroCard resData={MOCK_DATA}/>)

    const resname=screen.getByText("Mehfil");

    expect(resname).toBeInTheDocument();
})