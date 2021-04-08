import React,{useState,useEffect} from "react";

function Login({handleLogin}) {
  const [user,setUser]=useState({
    email:'',password:""
  })
  const [formErr,setFormErr]=useState({
    emailErr:null,passwordErr:null
  })
  const [validForm, setValid]=useState()
  const handleSubmit=(e)=>{
    // e.preventDefault();
    console.log(user,'afffff');
    handleLogin()
  }
  const handleChange = (e) => {
    console.log(e.target.value);
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    switch (e.target.name) {
      case "email":
        setFormErr({...formErr,emailErr:e.target.value.length==0?'its require':!regEmail.test(e.target.value)?'Invalid Email': ""})
        setUser({...user, email: e.target.value});
        break;
        case "password":
          setUser({...user, password: e.target.value});
          setFormErr({...formErr,passwordErr:e.target.value.length<8?'not less than 8':""})
          break;
      default:
        break;
    }
    
    console.log(user);
  };
  
  useEffect(() => {
    ( formErr.emailErr=="" && formErr.passwordErr=="")? setValid(false):setValid(true)
     console.log(validForm,formErr);
  }, [formErr])
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
          <button className={`btn btn-success `} disabled={validForm}
          type='submit' onClick={handleSubmit}>done</button>
      </div>
    </div>
  );
}

export default Login;
