import React from 'react'
import './product/product.css'

export const Moreinfo = ({props}) => {
    return (
        <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
            <div class="inner">
                <div class="main-img"><img src={props.images[0]} alt="Category" /></div>
                <div class="thumblist"><img src={props.images[1]} alt="Category" /><img src={props.images[2]}alt="Category" /></div>
            </div></a>
            <div class="card-body text-center">
                <h4 class="card-title">{props.title}</h4>
                <p class="text-muted"> ₹&nbsp;&nbsp;{props.price}</p>
                <p class="text-muted">{props.category}</p>
                <p class="text-muted">{props.brand}</p>
                <p class="text-muted">stock:-&nbsp;{props.stock}</p>
                <p class="text-muted">Discount:-&nbsp;{props.discountPercentage}%</p>
                <p class="text-muted">{props.description}</p>
                
                
            </div>
        </div>

    )
}
