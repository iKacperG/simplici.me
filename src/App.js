import React, {useState} from 'react';
import './App.css';

import {
    HashRouter,
    Route,
} from 'react-router-dom';

import ChangePath from "./Choose/ChangePath";
import SpeedReview from "./Review/SpeedReview";
import Landing from "./Landing/Landing";
import SignIn from "./Auths/Login";
import SignUp from "./Auths/Signup";
import CreateNew from "./Write/createNew";
import Logout from "./Auths/Logout";
import Notes from "./Write/Notes";
import {AuthProvider} from "./Auths/Auth";


function App() {


    const [convSize, setConvSize] = useState('100');
    const [keywordsFocus, setKeywordsFocus] = useState('50');
    const [userName, setUserName] = useState({});
    const [actualNote,setActualNote] = useState('');

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
                    <Route exact path='/CreateNew'
                           render={(props) => <CreateNew
                               user={userName}
                               setUser={setUserName}
                               actualNote={actualNote}
                               setActualNote={setActualNote}/>

                           }/>
                    <Route exact path='/Review' render={(props) => <SpeedReview
                        convSize={convSize}
                        setConvSize={setConvSize}
                        keywordsFocus={keywordsFocus}
                        setKeywordsFocus={setKeywordsFocus}/>}/>

                    <Route path='/login' render={(props) => <SignIn
                        user={userName}
                        setUser={setUserName}/>
                           }/>

                    <Route path='/register' component={SignUp}/>

                    <Route exact path='/Logout' render={(props) => <Logout
                        user={userName}
                        setUser={setUserName}/>
                    }/>

                    <Route path='/Notes' component={Notes}/>

                    </AuthProvider>
                </>
            </HashRouter>

        </div>
    );
}

export default App;
