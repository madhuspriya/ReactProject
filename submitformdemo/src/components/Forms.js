import React, {useState} from 'react';

function Forms() {
const data ={
    first_name: '',
    last_name: '',
    gmail: ''
}
    const [inputField , setInputField] = useState(data)
    console.log("🚀 ~ file: Forms.js ~ line 10 ~ Forms ~ inputField", inputField)

    const inputsHandler = (e) =>{
        setInputField( {...inputField, [e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        setInputField(inputField)
        alert(inputField?.first_name)
    }

    return (
        <div>
            <input 
            type="text" 
            name="first_name" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={inputField.first_name}/>

            <br/>

            <input 
            type="text" 
            name="last_name" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={inputField.last_name}/>
            <br/>

            <input 
            type="gmail" 
            name="gmail" 
            onChange={inputsHandler} 
            placeholder="Gmail" 
            value={inputField.gmail}/>

            <br/>
            <button onClick={submitButton} type="submit">Submit Now</button>
        </div>
    )
}

export default Forms