import React, {useEffect, useState} from "react";



const Hook = () => {
    const [numbers,setNumbers] = useState([1,2,3,4])
    console.log('refresh DOM')

    const randomNumber = Math.round(Math.random()*100);

    const addNumbers = () =>{
        setNumbers([ ...numbers,randomNumber])

    }
    // console.log(useState())
    const deleteNumbers = () =>{
        numbers.pop(randomNumber)
        setNumbers([...numbers])
    }

    useEffect(()=>{
        document.title = `You added ${numbers} `
        console.log('effect  occur')
    })
    return(
        <div>
            <ul>
                {
                    numbers.map((e,i)=><li key={i}>{e}</li>)
                }
            </ul>
            <button onClick={addNumbers}>add number</button>
            <span>   </span>
            <button onClick={deleteNumbers}>delete number</button>
        </div>
    )




}
export default Hook;