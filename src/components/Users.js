import React from "react"
import { useState, useEffect } from "react"
import UserTable from "./UserTable";



function Users() {

    const [arrUsers, setArrUsers] = useState([])
    const [tasks, setTask] = useState([])

    //============================
    let currentUser;
    let dataUser;
    let dataTask;

    //============================
    async function fetchData() {
        try {

            const response = await fetch('http://jsonplaceholder.typicode.com/users')
            dataUser = await response.json()

            console.log("dataUser", dataUser);
            setArrUsers(dataUser)


        }

         catch (err) {

            console.log("err" + err);
        }
    }


    //============================
    useEffect(() => {
        fetchData()

    }, [])

    //==============================

    useEffect(() => {
        fetchData()

    }, [arrUsers])
    //==============================






    return (

        <>
            <tr>
                <td>  id   </td>
                <td> </td>
                <td> name </td>
                <td> </td>
                <td> משימה</td>

            </tr>
            {arrUsers.length > 0 && arrUsers.map((item, index) => {
                return (
                    <p key={index}>
                        <UserTable user={item}></UserTable>
                    </p>
                );
            })}

            {/* // */}
            {/* {tasks.length>0 && tasks.map((item, index) => {
    return (
        <p key={index}>
           {index}

        </p>
    );
})} */}
        </>
    )


}
export default Users
