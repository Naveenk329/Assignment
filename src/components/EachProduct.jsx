import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Moreinfo} from './Moreinfo'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moreInfo } from "../Redux/reducers/productReducers";
import { Product } from './Product';



export const EachProduct = ({ product }) => {
const [value,setValue]=useState(null)
var navigate = useNavigate();
var dispatch = useDispatch();
  function handle(data){
    setValue(data)
    dispatch(moreInfo(data))
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
                <Card.Text>Price:- $ {product.price}</Card.Text>
                <Card.Text>Category:- {product.category}</Card.Text>
                <Card.Text className="empty-stars">{product.rating}</Card.Text>
                <Button variant="info" onClick={()=>handle(product)}>More Details</Button>
                
            </Card.Body>
        </Card>

    )
}
