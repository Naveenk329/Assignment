import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Home} from './Home'

export const EachProduct = ({ product }) => {
    return (

        <Card style={{ width: '18rem' , margin:'8px'}}>
            <Card.Img variant="top" src={product.images[0]} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price:- ₹ {product.price}</Card.Text>
                <Card.Text>Category:- {product.category}</Card.Text>
                <Card.Text>rating:-{product.rating}</Card.Text>
                <Button variant="info">More Details</Button>
                
            </Card.Body>
        </Card>

    )
}
