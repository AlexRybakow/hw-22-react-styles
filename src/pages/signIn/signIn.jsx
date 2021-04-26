import Icon from '../padlock.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return(
        <div className="signin-page">
            <img className='form-icon' src={Icon} alt='lock'></img>
            <div className='user-info'>
            <input className='user-input' type="text" placeholder='Enter e-mail'/>
            <input className='user-input' type="text" placeholder='Enter password'/>
            </div>
            <div className='checkbox-input'>
             <input type="checkbox" name="check" id="signin-checkbox"/>
             <label htmlFor="remember-user">Remember me</label>
            </div>
            <button className='signin-button'>Sign In</button>
            <Link to='/hw-22-react-styles/signup'>Don't have an account?</Link>
        </div>
    )
}

export default SignIn;