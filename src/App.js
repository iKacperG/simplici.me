import React, {useState} from 'react';
import './App.css';

import {
    HashRouter,
    Route,
} from 'react-router-dom';

import ChangePath from "./ChangePath";
import SpeedReview from "./SpeedReview";
import Landing from "./Landing";
import SignIn from "./Login";
import SignUp from "./Signup";
import CreateNew from "./createNew";
import Logout from "./Logout";
import Notes from "./Notes";
import {AuthProvider} from "./Auth";


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
