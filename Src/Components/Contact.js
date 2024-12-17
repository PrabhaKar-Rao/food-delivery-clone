

const Contact =()=>{

    return(

        <div className=" flex-col m-4 p-4 text-center">
            <h1>This is Contact us page</h1><br></br>
            <input type="text" className="border-2 border-blue-500 p-2 m-2" placeholder="name"></input><br></br>
            <input type="text" className="border-2 border-blue-500 p-2 m-2" placeholder="password"></input><br></br>
            <button className="w-[100px] h-[50px] bg-blue-500 rounded-lg text-white">Submit</button>
        </div>
    )
}
export default Contact;