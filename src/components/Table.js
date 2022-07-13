import React from 'react'

export const Table = ({ data }) => {

    return (
        <div>
            <tbody>
                <tr>
                    <th>Product title</th>
                    <th>  Category</th>
                    <th>  Price</th>
                    <th>  Rating</th>

                </tr>
                {data.map((ele)=>(
                    <tr key={ele.id}>
                        <td>{ele.title}</td>
                        <td>{ele.category}</td>
                        <td>{ele.price}</td>
                        <td>{ele.rating.rate}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    )
}
