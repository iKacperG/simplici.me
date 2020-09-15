import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/SaveRounded";
import firebase from "./Firebase";

const SaveButton = (props) => {
    const db = firebase.firestore();
    const auth = firebase.auth();


    const handleSaving = () => {
        auth.onAuthStateChanged(function (user) {

            if (user) {

                let currentUserObject = db.collection('users').doc(user.uid);

                currentUserObject.get()
                    .then(doc => {
                        return doc.data().note

                    })
                    .then(res => {
                        currentUserObject.update({
                            note: [...res, props.actualNote]
                        })
                            .catch(err => err + 'error')
                        alert('saving is done')
                    })
                    .catch(err => err + " error");
            }
        })
    }

    return (
        <div className="button-group-review">
            <Button
                onClick={handleSaving}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon/>}>
                Save to cloud
            </Button>
        </div>
    )
}

export default SaveButton;