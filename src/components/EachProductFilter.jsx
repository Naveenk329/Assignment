import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const EachProductFilter = ({product}) => {
  return (
    <>
    <Card style={{ width: '18rem',display:'flex' }}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price:-&nbsp; ₹ {product.price}</Card.Text>
            <Card.Text>Category:-&nbsp; {product.category}</Card.Text>
            <Card.Text>rating:-&nbsp;{product.rating}</Card.Text>
            <Button variant="info">More Details</Button>
           
        </Card.Body>
    </Card>
</>
  )
}
