import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

function App() {

  const [list, setList] = useState([{
    name: "Chris",
    email: "kl467@cornell.edu",
    role: "frontend engineer"
  },
  {
    name: "John",
    email: "johndoe@gmail.com",
    role: "backend engineer"  
  }
]);

  return (
    <div className="App">
      <div className="TeamBuilderContainer">
        <h1>Team Builder</h1>
        <Form list={list} setList={setList}/>
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
                    <Button color="danger">Delete</Button>
                  </CardBody>
                </Card>
        ))}
      </div>
    </div>
  );
}

export default App;