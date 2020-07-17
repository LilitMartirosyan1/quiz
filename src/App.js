import React, {Component} from 'react';
import Registration from "./components/Registration";
import './App.css'
import Hook from "./components/Hook";

import Lifecycle from "./components/Lifecycle";
import Quiz from "./components/Quiz/Quiz";


export default class App extends Component {

    state = {
        value: 'ENG',
            arr:[
                {itEn:'Home',itAR:'Գլխավոր',itRu:'Главная'},
                {itEn:'About us',itAR:'Մեր մասին',itRu:'О нас'},
                {itEn:'Contact',itAR:'Կապ',itRu:'Контакт'},
            ],

    }

    handleChange = (event) => {

        this.setState({value: event.target.value});

    }


    render() {
        return (
            <div>
                <div className="navbar">
                    <nav>
                        {
                            this.state.arr.map((e,i)=>{
                                return(
                                    this.state.value==='ENG'?
                                        <ul key={i}>
                                            <li>{e.itEn}</li>
                                        </ul>
                                        :this.state.value==='ARM'?
                                        <ul  key={i}>
                                            <li>{e.itAR}</li>
                                        </ul>
                                        :<ul  key={i}>
                                            <li>{e.itRu}</li>
                                        </ul>
                                )
                            })
                        }
                    </nav>
                    <form>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value='ARM'>ARM</option>
                                <option value='RUS'>RUS</option>
                                <option value='ENG'>ENG</option>
                            </select>
                    </form>
                </div>
                <Registration/>
                {/*<Hook/>*/}
                <Lifecycle/>
                <Quiz/>
            </div>
        )
    }

}


