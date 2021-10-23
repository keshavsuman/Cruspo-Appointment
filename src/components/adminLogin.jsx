import React, { useState } from 'react';
import { store } from 'react-notifications-component';
import { Link ,useHistory} from 'react-router-dom';
import '../assets/login.css';
import { baseURL, routes } from '../services/config';

const Login = ()=>{
    const history = useHistory();
    const [state, setState] = useState( {
                userNotFound:false,
                passwordIncorrect:false
            });

    const handleSubmit = async (e)=>{
        e.preventDefault();
        var response = await fetch(baseURL.adminBaseURL+routes.login,{
            body:JSON.stringify({
                email:state.email,
                password:state.password
            }),
            method:'POST',
            mode:'cors',
            headers:{
                'Content-type':'application/json'
            }
        });
        if(response.ok){
            var responseData = await response.json();
            if(responseData.message==="USER_NOT_FOUND")
            {
                setState({
                    userNotFound:true
                });
                store.addNotification({
                    title: "User doesn't exists",
                    message: "user doesn't exists",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                    }
                });
            }else if(responseData.message==="PASSWORD_INCORRECT")
            {
                setState({
                    passwordIncorrect:true
                });
                store.addNotification({
                    title: "password Incorrect",
                    message: "password incorrect",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                    }
                });
            }else if(responseData.message==="LOGIN_SUCCESSFULL"){
                localStorage.setItem('admin_access_key',responseData.data.token);
                localStorage.setItem('user',JSON.stringify(responseData.data.user));
                store.addNotification({
                    title: "Login Successfull",
                    message: "you have successfully logged in",
                    type: "success",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                    }
                });
                console.log(responseData.data);
                history.push('/admin/appointment/616bd2b7cbe9bf7ae92c5986');
            }
        }else{
            console.log(response);
            // store.addNotification({});
        }
    }

        return (
            <div className="login-wrapper">
                <div className="login-container">
                    <img src="/Images/log-in.svg" alt="login_img"/>
                    <form onSubmit={(e)=>handleSubmit(e)} className="login-form" autoComplete>
                        {state.userNotFound?<p>User not Found </p>:<></>}
                        <input type="text" name="email" placeholder="Registered Email" onChange={(e)=>state.email = e.currentTarget.value}/>
                        <input type="password" name="password" placeholder="Password" onChange={(e)=>state.password = e.currentTarget.value}/>
                        <button type="submit">Login</button>
                        <p>Trouble logging in? <Link to="/forget-password">Forget password</Link></p>
                    </form>
                </div>
            </div>
        )
}

export default Login;
