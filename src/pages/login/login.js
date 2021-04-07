import React,{useState} from "react";

function Login({handleLogin}) {
  const [user,setUser]=useState({
    email:'',password:""
  })
  const [formErr,setFormErr]=useState({
    emailErr:null,passwordErr:null
  })
  const handleSubmit=(e)=>{
    // e.preventDefault();
    handleLogin()
  }
  const handleChange = (e) => {
    console.log(e.target.value);
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    switch (e.target.name) {
      case "email":
        setFormErr({...formErr,emailErr:e.target.value.length==0?'its require':!regEmail.test(e.target.value)?'Invalid Email': null})
        setUser({...user, email: e.target.value});
        break;
        case "password":
          setUser({...user, password: e.target.value});
          setFormErr({...formErr,passwordErr:e.target.value.length<8?'not less than 8':null})
          break;
      default:
        break;
    }
    
    console.log(user);
  };
  return (
    <div className="container mt-5" >
        <div className="row ">
            <label>email</label>
        <input type="text" name="email" value={user.email} onChange={handleChange} />
        <small >{formErr.emailErr}</small>
        </div>
       
      <div className="row">
      <label>password</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} /><small >{formErr.passwordErr}</small>
      </div>
      <div className="row">
          <button className={`btn btn-success ${user.email==""&&user.password=="" && !formErr.emailErr? "disabled":""} `} type='submit' onClick={handleSubmit}>done</button>
      </div>
    </div>
  );
}

export default Login;
