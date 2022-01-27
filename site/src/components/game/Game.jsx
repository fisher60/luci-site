import React from "react";
import "./Game.css";
import strawberry from "./strawberryTransparent.png";

export class Game extends React.Component {
    animationOptions = ["none", "spin", "ping", "pulse", "bounce"]
    state = {
        animation: "none"
    }

    buttonClicked(buttonName){
        this.setState({animation: buttonName})
    }

    render(){
        return(
            <div className="w-screen h-screen overflow-hidden">
                <div className="w-full bg-fuchsia-600">
                    {this.animationOptions.map((anim, ind) => <button onClick={_ => this.buttonClicked(anim)} className="w-24 h-full items-center bg-white bg-opacity-0 hover:bg-opacity-40 transition ease-in-out motion-reduce:bg-inherit" key={ind}>{anim}</button>)}
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                <div className="flex items-center justify-center w-5/6 h-5/6 lg:w-2/6 bg-fuchsia-400 rounded-md">
                    <div className="w-1/5">
                        <img className={"animation-" + this.state.animation} src={strawberry} alt="a very happy strawberry"/>
                    </div>
                    
                </div>
            </div>
            </div>
            
        );
    }
}