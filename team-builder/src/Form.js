import React, {useState, useEffect} from 'react';

function Form (props) {
    const {addNewForm, memberToEdit, editMember} = props;

    const [currentData, setCurrentData] = useState({
        id: "",
        name: "",
        email: "",
        role: ""
    })

    // Stretch
    useEffect(()=> {
        setCurrentData(memberToEdit)
    }, [memberToEdit])

    const handleChange = event => {
        setCurrentData({
         ...currentData,
            [event.target.name]:event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault();

        // Stretch - Step 4
        let isEditing = !(Object.keys(memberToEdit).length === 0);
        if(isEditing){
            editMember(currentData);
        } else {
            addNewForm(currentData);           
        }

        setCurrentData({
            name: "",
            email: "",
            role: ""
        })
    }
    
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
            Role: <select name="role" onChange={handleChange} value={currentData.role}>
                        <option></option>
                        <option>backend engineer</option>
                        <option>frontend engineer</option>
                        <option>designer</option>
                  </select> 
            </label><br/>
            
            <label>
                <input type="submit"></input>
            </label>
        </form>
        
    )
}

export default Form;