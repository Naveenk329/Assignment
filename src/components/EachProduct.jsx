import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Moreinfo} from './Moreinfo'


export const EachProduct = ({ product }) => {
const [value,setValue]=useState(null)

  function handle(data){
    setValue(data)
  }
  if(value != null){
    return (
      <Moreinfo props={value}/>
    )
  }
  

    return (

        <Card style={{ width: '18rem' , margin:'8px'}}>
            <Card.Img variant="top" src={product.images[0]} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price:- ₹ {product.price}</Card.Text>
                <Card.Text>Category:- {product.category}</Card.Text>
                <Card.Text className="empty-stars">{product.rating}</Card.Text>
                <Button variant="info" onClick={()=>handle(product)}>More Details</Button>
                
            </Card.Body>
        </Card>

    )
}
