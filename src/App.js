import './App.css';
import EditAppoinment from './components/appoinment';
import { BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import AdminLogin from './components/adminLogin';
import 'react-notifications-component/dist/theme.css';

function App() {
  return (
    <Router>
        <ReactNotification />
        <Switch>
          <Route path="/admin/login" component={AdminLogin}/>
          {
            localStorage.getItem('admin_access_key')?
            <>
              <Route path="/admin/appointment/:appointmentId" render={(props) => <div className="wrapper">
                <EditAppoinment/>
                  </div>} />
              </>
            :
            <Redirect
              to='/login' 
            />}
        </Switch>
      </Router>
  );
}

export default App;
