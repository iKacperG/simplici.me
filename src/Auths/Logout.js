import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import * as firebase from "firebase";

const Logout = (props) => {
    const history = useHistory();
    firebase.auth().signOut().then(function() {
        props.setUser('');
        history.push('/');
    }).catch(function(error) {
      alert("Can't log out " + error);
    });


    return null;



}



export default Logout