import React from "react";

class Hero extends React.Component{
    render(){
        return (
            <div className="hero">
            <div className="basic-details">
                <h1>Name: Pranav Sharad Yeole</h1>
                <h1 className="not-bold">Email: pranav@google.com</h1>
                <h1 className="not-bold">Phone: 8546465544</h1>
                <h1 className="not-bold">Address: ABC,  xyz  street.</h1>
            </div>
            </div>
        )
    }
}

export default Hero;