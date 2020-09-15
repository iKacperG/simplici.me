import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/SaveRounded";
import firebase from "../Auths/Firebase";

const SaveButton = (props) => {
    const db = firebase.firestore();
    const auth = firebase.auth();


    const handleSaving = () => {
        let userNotes;


                let currentUserObject = db.collection('users').doc(auth.currentUser.uid);


                currentUserObject.get()
                    .then(res => {
                        console.log(res.data().note + 'datanote');
                        return res.data().note

                    })
                    .then(res => {
                        console.log(res + 'res');
                        currentUserObject.update({
                            note: [...res, props.actualNote]
                        })
                            .catch(err => err + 'error')
                        alert('saving is done')
                    })
                    .catch(err => err + " error");
            }


    return (
        <div className="button-group-review">
            <Button
                onClick={handleSaving}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon/>}
            >
                Save to cloud
            </Button>

        </div>
    )
}

export default SaveButton;