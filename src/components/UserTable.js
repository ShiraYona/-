import React from "react"
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react"
import Users from "./Users"


function UserTable(props){
    

    const navigate=useNavigate()
    


    return(<>

    <tr>
        <td>{props.user.id}</td>
        <td></td>
        <td>{props.user.name}</td>
        <td> </td>
       <td><button onClick={()=>{navigate('/task',{state:props.user})} }>משימות</button></td>
       
    </tr>
    
    
    
    
    </>)
}
export default UserTable