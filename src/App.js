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
          <Route path='/' exact>
          <HomePage/>
          </Route>
          <Route path='/signin'>
          <SignIn/>
          </Route>
          <Route path='/signup' >
          <SignUp/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;