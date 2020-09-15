import React, {useEffect, useState} from 'react';
import firebase from "../Auths/Firebase";
import PersistentDrawerLeft from "./Bar";
import { withStyles } from '@material-ui/styles';


const Notes = (props) => {
    let [userNotes, setUserNotes] = useState([])
    const db = firebase.firestore();
    const auth = firebase.auth();
    let user = auth.currentUser


    useEffect(() => {
        db.collection('users').doc(user.uid).get()
            .then(res => {
                if(res) {
                    return res.data().note
                }
            })
            .then(res => {
                setUserNotes([...res])
                console.log(userNotes);
            }).catch(err=>console.log('failed' +err))

    }, [])


    let allNotes = userNotes.map(note => {
        return <>
            <li className="notes-single"><br/>{note}</li>
        </>
    })
    console.log(userNotes);


    return <PersistentDrawerLeft user={user}
                                 actualNote={props.actualNote}
                                 setActualNote={props.setActualNote}
                                 actualContent={<ul className="notes-container">
                                     {allNotes}
                                 </ul>}/>

}

export default Notes
