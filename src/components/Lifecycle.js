import React, {Component} from "react";

export default class Lifecycle extends Component {

    constructor(props){
        console.log(props)
        super(props);
        this.state = {
            favoriteColor:'red',
            a:1
        }
        console.log('constructor')
    }



    render() {
        console.log('render')
        return(
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
            </div>
        )
    }
}