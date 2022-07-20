import React, { useState, useEffect } from 'react'

import axios from 'axios'

export const UserData = () => {
    const [res, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res1 = await axios.get('https://jsonplaceholder.typicode.com/users');

                console.log(res1.data)
                setData(res1.data)

            }
            catch (err) {
                console.log(err)

            }
        };

        getData()
    }, []);
    console.log(res)
    //console.log(res.length)

    return (
        <>
            

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Serial No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Company</th>
                            <th scope="col">website</th>
                        </tr>
                    </thead>
                    {res.map((ele) =>
                    <tbody>
                        <tr>
                            <th scope="row">{ele.id}</th>
                            <td>{ele.name}</td>
                            <td>{ele.username}</td>
                            <td>{ele.email}</td>
                            <td>{ele.company.name}</td>
                            <td>{ele.website}</td>
                        </tr>
                    </tbody>
                     )}
                </table>

        
            </>
    )
}
