import Icon from '../padlock.png'

const SignUp = () => {
    return(
        <div className="signup-page">
            <img className='form-icon' src={Icon} alt='lock'></img>
            <div className='user-info'>
            <input className='user-input' type="text" placeholder='First name'/>
            <input className='user-input' type="text" placeholder='Last name'/>
            <input className='user-input' type="text" placeholder='E-mail address'/>
            <input className='user-input' type="text" placeholder='Password'/>
            </div>
            <input type="checkbox" name="check" id="signin-checkbox"/>
            <button className='signup-button'>Sign Up</button>
        </div>
    )
}

export default SignUp;