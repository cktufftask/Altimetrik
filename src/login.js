import './App.css';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'

 const  Login = (props) => {
    const dispatch = useDispatch();
   const [username,setUsername]=useState('');
   const [password,setPassword]=useState('');
   const users =useSelector(state=>state.registationReducer.Users);
   const history = useHistory();
    
   const handleClick = ()=>{

     const check=users.filter((item)=>item.username===username && item.password===password);
     console.log(check, "&&&&&&&&&&");
     const login={AUTH_LOGIN:true, username:check[0].username};
     if(check.length>0){
        dispatch({type:'LOGIN_USER', login:login});
        history.push('/dashbord');

     }
   }
  return (
    <>
      <div className="App">
        <div>
          <AppBar
            title="Login"
          />
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <RaisedButton label="Submit" primary={true}  onClick={(event) => handleClick(event)} />
        </div>
        <br/>
        <NavLink to="registation">Sing Up Here </NavLink>
      </div>
    </>
  );
}


export default Login;
