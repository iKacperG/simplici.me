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



function App() {

    const [convSize, setConvSize] = useState('100');
    const [keywordsFocus, setKeywordsFocus] = useState('50');


  return (
    <div className="App">
        <HashRouter>
            <>
                <Route exact path='/' component={ChangePath} />
                <Route exact path='/SpeedReview' render={ (props) =>  <SpeedReview
                    convSize={convSize}
                    setConvSize={setConvSize}
                    keywordsFocus={keywordsFocus}
                    setKeywordsFocus={setKeywordsFocus}/> } />
            </>
        </HashRouter>

    </div>
  );
}

export default App;
