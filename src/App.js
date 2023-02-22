import { useState } from 'react'
import './App.css';
import Answer from './Answer';
import Form from './Form';


function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [starsRate, setStarsRate] = useState("");

  

  return (
    <div className="App">
      <Answer />
      <Form name = {name} setName = {setName} 
      email = {email} setEmail = {setEmail} 
      message = {message} setMessage = {setMessage} 
      question1 = {question1} setQuestion1 = {setQuestion1}
      question2 = {question2} setQuestion2 = {setQuestion2}
      question3 = {question3} setQuestion3 = {setQuestion3}
      question4 = {question4} setQuestion4 = {setQuestion4}
      starsRate = {starsRate} setStarsRate = {setStarsRate}
      />

      
    </div>
  );
}

export default App;
