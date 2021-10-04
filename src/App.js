import React, { useEffect } from 'react';
import './App.scss';
import { HomeScreen, Login, Profile } from './components';
import { auth } from './firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout,login,selectUser } from './features/userSlice';

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
     const subscribe = auth.onAuthStateChanged(userAuth => {
            if(userAuth){
                dispatch(login({
                    uid:userAuth.uid,
                    email : userAuth.email
                }))
            }else {
                dispatch(logout())
            }
        })
        return subscribe
    },[dispatch])
  return (
    <div className="app">
    <Router>
        {!user ? 
        (<Login/>): 
        <Switch>
        <Route path="/profile">
            <Profile />
        </Route>
        <Route path="/">
        <HomeScreen />
        </Route>
      </Switch>
        }
       
    </Router>

   
    </div>
  );
}

export default App;
