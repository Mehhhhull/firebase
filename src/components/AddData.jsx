import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import {app} from '../Firebase'
const AddData = () => {
  const addDemoData=(userId,name,phone)=>{
    const db=getDatabase(app)
    set(ref(db,'worker/'+userId),{
      studentName:name,
      phone:phone
    })
  }
  return (
    <div>
      <h1>
        Add Data
      </h1>
      <button onClick={()=>{addDemoData(456,'TS',487836)}}>Add demo data</button>
    </div>
  )
}

export default AddData
