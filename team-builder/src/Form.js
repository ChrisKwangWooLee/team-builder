import React, {useState} from 'react';

function Form (props) {
    const {addNewForm, memberToEdit, setMemberToEdit} = props;

    const [currentData, setCurrentData] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChange = event => {
        setCurrentData({
         ...currentData,
            [event.target.name]:event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault();
        addNewForm(currentData);
    }
    

    console.log(currentData);

    return(
        <form onSubmit={submitForm}>
            <label>
            Name: <input onChange={handleChange} 
                         type="text" 
                         id="nameInput" 
                         name="name" 
                         value={currentData.name}
                         placeholder="name"></input>
            </label><br/>
            
            <label>
            Email: <input onChange={handleChange} 
                          type="email" 
                          id="emailInput" 
                          name="email" 
                          value={currentData.email}
                          placeholder="email"></input>
            </label><br/>
            
            <label>
            Role: <select name="role" onChange={handleChange}>
                <option/>
                <option>Backend Engineer</option>
                <option>Frontend Engineer</option>
                <option>Designer</option>
                </select> 
            </label><br/>
            
            <label>
                <input type="submit"></input>
            </label>
        </form>
        
    )
}

export default Form;