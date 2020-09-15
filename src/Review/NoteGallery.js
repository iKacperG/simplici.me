import React, {useEffect, useState} from 'react';
import PersistentDrawerLeft from "../Write/Bar";
import firebase from "../Auths/Firebase";

const NoteGallery = (props) => {
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

            }).catch(err=>console.log(err+'error'))

    }, [])


    let allNotes = userNotes.map(note => {
        return <>

            <li className="notes-gallery-single"><br/>{note}</li>
        </>
    })
    console.log(userNotes);




    return <ul className="notes-gallery">
        {allNotes}
    </ul>
}

export default NoteGallery;