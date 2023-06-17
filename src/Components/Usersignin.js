import React from 'react';
import  { useNavigate } from "react-router-dom";
function Usersignin() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Usersignout");

  }

  return (
    <>
  <div className='Userforgetcontainer'>
    <div className='forget'>
      <form>
        <h2>Forget Password</h2>
        <div className='Userforgetinputbox'>
                    <input type='text' required="required" name='Forgetpassword'></input>
                    <span>Enter User ID</span>
                    <i></i>
                </div>
                <div className="forgetsubmit">
            <input type="submit" value="Submit"></input>
          </div>
          <div className='usernavigate'>
                  <text>You Dont Have An Account?</text>
                <div className='userforgetnew'>
                <p className='userforget' onClick={handleClick}>Signup</p>
                </div>
                </div>
      </form>
    </div>
  </div>
    </>
    
  );
}

export default Usersignin;
