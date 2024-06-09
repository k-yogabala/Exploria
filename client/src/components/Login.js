import logo from '../logo.svg'; 
import '../App.css'; 
import axios from 'axios'; 
import Home from './Home'; 
import { useState } from 'react'; 
function Login({store}) { 
  const [result,setResult]=useState(null); 
  const[un,setUn]=useState(null); 
  function handleForm(event) { 
    alert("Login Successful"); 
    window.location.href='./hom';
    event.preventDefault(); 
    const data = new FormData (event.currentTarget); 
    setUn(data.get("un")); 
    const pw = data.get("pw"); 
    console.log(un+" --- "+pw); 
    axios.get('http://localhost:8081/check',{params:{ 
      un: data.get("un"), 
      pw: data.get("pw") 
    }}).then((response)=>{ 
      console.log(response.data) 
      setResult(response.data); 
      console.log(result) 
    }) 
  } 
  if(result===null || result==='fail'){ 
 
  return ( 
     
          <div className="App-login"> 
            <form onSubmit={handleForm}> 
              Email id : <input type="text" placeholder='email' name="un"/> 
              <br/> 
              <br/> 
              Password: <input type="password" placeholder='password' name="pw"/> 
              <br/><br/> 
              <input type="submit" value="Login"/> 
            </form> 
          </div> 
        
  ); 
  } 
  else{ 
    return( 
      <div> 
        <Home un={un} store={store} /> 
      </div> 
    ) 
  } 
} 
 
export default Login;
