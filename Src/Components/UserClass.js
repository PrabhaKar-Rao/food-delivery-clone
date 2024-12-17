import React from "react";
class UserClass extends React.Component{

    constructor(props){

        super(props);

        this.state={
            count :0
        }

    }

    render(){

        const {userName, location}=this.props;
        const {count}=this.state;

        return(
            <div>
                <h3>{userName}</h3>
                <h3>{location}</h3>
                <h3>Count :{count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:count+1,
                    })
                }}></button>
            </div>
        )
    }
}
export default UserClass;