import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

function App() {

  const [list, setList] = useState([{
    id: 1,
    name: "Chris",
    email: "kl467@cornell.edu",
    role: "frontend engineer"
  },
  {
    id: 2,
    name: "John",
    email: "johndoe@gmail.com",
    role: "backend engineer"  
  }
]);
console.log(list);

const addNewForm = currentData => {
  console.log('Adding...')
  const newForm = {
    id: Date.now(),
    name: currentData.name,
    email: currentData.email,
    role: currentData.role
  }

  setList(
    [
      ...list,
      newForm
    ]
  )
}

// Stretch - Step 3
  const [memberToEdit, setMemberToEdit] = useState({});
  console.log(memberToEdit);

  const handleEdit = member => {
    setMemberToEdit(member)
  }

  // Stretch - Step 4
  const editMember = currentData => {

    console.log("Editing...")
    const newList = list.map(member => {
      if (member.id === currentData.id) {
        return currentData
      } else {
        return member
      }
    });

    setList(newList);
    setMemberToEdit({});
  }

  return (
    <div className="App">
      <div className="TeamBuilderContainer">
        <h1>Team Builder</h1>
        <Form addNewForm={addNewForm} memberToEdit={memberToEdit} editMember={editMember}/>
      </div>

      <hr/>

      <div className="results">
        <h2>Our team members</h2>
        {list.map( (member, index) => (
                <Card key={index}>
                  <CardHeader tag="h3">{member.name}</CardHeader>
                  <CardBody>
                    <CardTitle>{member.role}</CardTitle>
                    <CardText>{member.email}</CardText>
                    <Button onClick={() => handleEdit(member)} color="primary">Edit</Button>
                  </CardBody>
                </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
