import React, {useState} from 'react';
import PersistentDrawerLeft from "./Bar";

const CreateNew = (props) => {

  const [user,setUser] = useState(props.user)

  return  <PersistentDrawerLeft user={user}/>
}

export default CreateNew;