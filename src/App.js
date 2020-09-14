import React, {useState} from 'react';
import './App.css';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import ChangePath from "./ChangePath";
import SpeedReview from "./SpeedReview";
import Landing from "./Landing";
import firebase from "./Firebase";
import SignIn from "./Login";
import SignUp from "./Signup";
import CreateNew from "./createNew";
import Logout from "./Logout";
import Notes from "./Notes";
import {AuthProvider} from "./Auth";


function App() {


    const [convSize, setConvSize] = useState('100');
    const [keywordsFocus, setKeywordsFocus] = useState('50');
    const [userName, setUserName] = useState('')


    return (
        <div className="App">
            <HashRouter>
                <>
                    <AuthProvider>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/changepath' render={(props) => <ChangePath
                        user={userName}
                        setUser={setUserName}/>
                    }/>
                    <Route exact path='/createnew'
                           render={(props) => <CreateNew
                               user={userName}
                               setUser={setUserName}/>
                           }/>
                    <Route exact path='/SpeedReview' render={(props) => <SpeedReview
                        convSize={convSize}
                        setConvSize={setConvSize}
                        keywordsFocus={keywordsFocus}
                        setKeywordsFocus={setKeywordsFocus}/>}/>
                    <Route path='/login' render={(props) => <SignIn
                        user={userName}
                        setUser={setUserName}/>
                           }/>
                    <Route path='/register' component={SignUp}/>
                    <Route exact path='/createnew/Logout' render={(props) => <Logout
                        user={userName}
                        setUser={setUserName}/>
                    }/>
                    <Route path='/createnew/Notes' component={Notes}/>
                    </AuthProvider>
                </>
            </HashRouter>

        </div>
    );
}

export default App;