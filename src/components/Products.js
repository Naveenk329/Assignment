import React from 'react'
import productData from "../products.json";

export const Products = () => {
    return (
        <div>
            <table>

                <tr>
                    <th>Product title</th>
                    <th>  Category</th>
                    <th>  Price</th>
                    <th>  Rating</th>
                </tr>
                <tr>
                    <td>{productData.map((ele) => (<ol>{ele.title}</ol>))}</td>
                    <td>{productData.map((ele) => (<ol>{ele.category}</ol>))}</td>
                    <td>{productData.map((ele) => (<ol>{ele.price}</ol>))}</td>
                    <td>{productData.map((ele) => (<ol>{ele.rating.rate}</ol>))}</td>
                </tr>




            </table>
        </div>
    )
}
