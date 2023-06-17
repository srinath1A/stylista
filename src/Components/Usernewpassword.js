import React from 'react'
import { useNavigate } from 'react-router-dom';
function Usernewpassword() {
    const newpassword = useNavigate();
    function handleClick(){
        newpassword("/Usersignout")
    }
  return (
    <>
  <div className='Usernewpasswordcontainer'>
    <div className='forget'>
      <form>
        <h2>Forget Password</h2>
        <div className='Usernewpasswordinputbox'>
            <input type='text' required="required" name='newPassword'></input>
            <span>New password</span>
            <i></i>
        </div>
        <div className='Usernewpasswordinputbox'>
            <input type='text' required="required" name='confirmPassword'></input>
            <span>Confirm password</span>
            <i></i>
        </div>
        <div className="newpaswordsubmit">
            <input type="submit" value="Submit"></input>
        </div>
        <div className='usernewpassword'>
            <text>You Dont Have An Account?</text>
            <div className='usersignupnew'>
            <p className='userforget' onClick={handleClick}>Signup</p>
            </div>
        </div>
      </form>
    </div>
  </div>
    </>
  )
}

export default Usernewpassword;
