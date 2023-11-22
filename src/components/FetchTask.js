
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';


function FetchTask() {

    const data = useLocation()
    const item = data.state;
    let dataTask;

    const [arrTask, setArrTask] = useState([])

    async function fetchData() {

        try {

            const response = await fetch('http://jsonplaceholder.typicode.com/todos')
            dataTask = await response.json()

            console.log("arrTask", arrTask);
            setArrTask(dataTask)

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

    }, [setArrTask])
    //==============================


    return (<>

        <h1> {`Hellow to ${item.name}`}</h1>
        <tr>
            <td>userId</td>
            <td> </td>
            <td>id</td>
            <td> </td>
            <td>title</td>
            <td> </td>
            <td>completed</td>
        </tr>
        {arrTask && arrTask.map((i, index) => {
            return (<>

                {i.userId === item.id &&
                    <tr>
                        <td>{i.userId}</td>
                        <td></td>
                        <td>{i.id}</td>
                        <td> </td>
                        <td>{i.title}</td>
                        <td> </td>
                        <td>{i.completed===true? "true":"false"}</td>
                        <td> </td>
                    </tr>}
                

            </>

            )
        })}

    </>)





}
export default FetchTask