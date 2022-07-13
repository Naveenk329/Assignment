import React from 'react'
import userData from "../users.json";

export const User2 = () => {
    const name = userData.map(ele => ele.name)
    const email = userData.map(ele => ele.email)
    const address = userData.map(ele => ele.address)


    return (
        <div>
            <table>
                <tbody>

                    <tr>
                        <th>Serial No.</th>
                        <th>  Name</th>
                        <th>  Email</th>
                        <th>  Address</th>
                    </tr>
                    <tr>
                        <td>{email.map((ele, index) => (<ol>{index}</ol>))}</td>
                        <td>{name.map((ele) => (<ol>{ele.firstname + "  " + ele.lastname}</ol>))}</td>
                        <td>{email.map((ele) => (<ol>{ele}</ol>))}</td>
                        <td>{address.map((ele) => (<ol>{ele.number + ", " + ele.street}</ol>))}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
