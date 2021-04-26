import Icon from '../padlock.png'

const SignIn = () => {
    return(
        <div className="signin-page">
            <img className='form-icon' src={Icon} alt='lock'></img>
            <div className='user-info'>
            <input className='user-input' type="text" placeholder='Enter e-mail'/>
            <input className='user-input' type="text" placeholder='Enter password'/>
            </div>
            <input type="checkbox" name="check" id="signin-checkbox"/>
            <button className='signin-button'>Sign In</button>
        </div>
    )
}

export default SignIn;