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


function App() {
    const db = firebase.firestore();
    db.collection('test').get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            })

        })

    const [convSize, setConvSize] = useState('100');
    const [keywordsFocus, setKeywordsFocus] = useState('50');
    const [userName, setUserName] = useState('')

    return (
        <div className="App">
            <HashRouter>
                <>
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
                </>
            </HashRouter>

        </div>
    );
}

export default App;
