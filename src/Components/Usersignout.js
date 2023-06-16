import { useState,} from "react";
import "./Userregister.css";
import axios from "axios";
// import DatePicker from "react-date-picker";


function Usersignout() {
  const [register,setRegister]=useState({
    Firstname:"",
    Lastname:"",
    Username:"",
    MobileNumber:"",
    Email:"",
    password:"",
    Conformpassword:"",
    date:"",
    gender:"",

  });
  
  const {Firstname,Lastname,Username,MobileNumber,Email,password,Conformpassword} = register;
  const onInputChange = (e) =>{
    setRegister({...register,[e.target.name]: e.target.value});
  };
  const onSubmit= async (e)=>{
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_BACKEND_PORT}/sign/post`,register).then((res) => {

    })
  }
  const [selectedGender, setSelectedGender] = useState('');
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };


  const [date, setDate] = useState("none");
  const onDateChange = (event) => {
     setDate(event.target.value);
  };
  return (
    <>
    <div className="usermain">
     <img src="./images/pic.jpg.jpeg" alt=""></img>
    <div className="usercontainer">
    <div className='Usersignuppage'>
      <div className='usersignup'>
        <form>
          <h2>Create New Account</h2>
          <div className='userinputbox'>
            <input type='text' required="required" name="Firstname"></input>
            <span>Firstname</span>
            <i></i>
            </div>
            <div className="userinputbox">
            <input type='text' required="required" name='Lastname'></input>
            <span>Lastname</span>
            <i></i>
            </div>
          

          <div className='userinputbox'>
          <input type='text' required="required" name='Username'></input>
            <span>Username</span>
            <i></i>
          </div>
          <div className='userinputbox'>
          <input type='number' required="required" name='MobileNumber'></input>
          <span>Mobile Number</span>
          <i></i>
          </div>

          <div className='userinputbox'>
            <input type='email'required="required" name='Email'></input>
            <span>Email</span>
            <i></i>
          </div>
          <div className='userinputbox'>
            <input type='password'required="required" name='password'></input>
            <span>Create Password</span>
            <i></i>
          </div>
          <div className='userinputbox'>
            <input type='password'required="required" name='Conformpassword'></input>
            <span>Conform Password</span>
            <i></i>
            </div>
          <div className='userinputbox'>
          <input
                  type="date"
                  value={date}
                  onChange={onDateChange}
                  name="date"/>
          </div>

          <div className='userinputbox,userradio' >
          <label>
        <input
          type="radio"
          value="male"
          checked={selectedGender === 'male'}
          onChange={handleGenderChange}
          name="gender"
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={selectedGender === 'female'}
          onChange={handleGenderChange}
          name="gender"
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          value="other"
          checked={selectedGender === 'other'}
          onChange={handleGenderChange}
          name="gender"
        />
        Other
      </label>
          </div>
          
          <div className="userregister">
            <input type="submit" value="Register"></input>
          </div>
          
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default Usersignout;
