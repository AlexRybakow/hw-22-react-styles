import Icon from '../padlock.png'
import { Link } from 'react-router-dom';

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
            <div className='checkbox-input'>
             <input type="checkbox" name="check" id="signup-checkbox"/>
             <label htmlFor="remember-user">I want to receive inspiration, marketing proposals <br/> and updates via email</label>
            </div>
            <button className='signup-button'>Sign Up</button>
            <Link to='/hw-22-react-styles/signin'>Already have an account?</Link>
        </div>
    )
}

export default SignUp;