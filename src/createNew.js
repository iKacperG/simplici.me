import React, {useState} from 'react';
import PersistentDrawerLeft from "./Bar";
import SaveToCloud from "./SaveToCloud";

const CreateNew = (props) => {

  const [user,setUser] = useState(props.user)

  return  <PersistentDrawerLeft user={user} actualContent={
    <SaveToCloud user={props.user} actualNote ={props.actualNote} setActualNote={props.setActualNote}/>
  }/>
}

export default CreateNew;