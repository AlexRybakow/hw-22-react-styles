import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation';
import HomePage from './pages/home/Home';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';

function App() {
  return (
    <div className="App">
      <header className="header flex">
        <NavBar/>
      </header>
      <main className='main-block'>
        <Switch>
          <Route path='/hw21-react-router/' exact>
          <HomePage/>
          </Route>
          <Route path='/hw21-react-router/signin'>
          <SignIn/>
          </Route>
          <Route path='/hw21-react-router/signup' >
          <SignUp/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;