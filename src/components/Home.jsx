import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import product from './products.json'
import { Product } from "./Product";
import { EachProductFilter } from './EachProductFilter'

export const Home = () => {
    product.products = product.products.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.category === value.category
        ))
    );
    const [active, setActive] = useState('');
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('');
    const [title, setTitle] = useState({
        title: ""
    })
    const [instock, setstock] = useState('')
    const handleChange = (eachData) => {
        setActive(eachData.id)
        setCategory(eachData.category)
        setBrand(eachData.brand)
        //setstock(eachData.stock)
        filterfunction(eachData.category)
        filterfunction1(eachData.brand)
    }
    const [filterProduct, setFilterProduct] = useState([])
    const filterfunction = (data) => {
        if (product.products.length > 0) {
            const filter = product.products.filter((ele) => ele.category == data)
            setFilterProduct(filter);
        }

    }
    const filterfunction1 = (data) => {
        if (product.products.length > 0) {
            const filter = product.products.filter((ele) => ele.brand == data)
            setFilterProduct(filter);
        }

    }
    //return to all product
    const returnToAll = () => {
        setActive('')
        setCategory('')
        setBrand('')
        setFilterProduct([])
    }
    const onChange = (ele) => {
        const { name, value } = ele.target
        setTitle((ele) => ({ ...ele, [name]: value }))
    }
    const filterTitle = (ele1) => {
        product.products.map(ele => ele.title.includes(ele1) ? setstock(ele) : setstock(null))
    }
    if (title != null) {
        <div className='my-product'>
            <h1 className='text-center'>All Product</h1>
            <Product props={product.products} />
        </div>
    }



    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 3 }}>
                        <h1>Filter</h1>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Category</Accordion.Header>
                                <Accordion.Body>
                                    {product.products.map((ele, index) => (
                                        <div>
                                            <Button variant="info"
                                                key={index} id={ele.id}
                                                onClick={() => handleChange(ele)}
                                                className={ele.id === active ? active : "deactive"}>{ele.category}</Button>
                                        </div>

                                    ))}

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Brands</Accordion.Header>
                                <Accordion.Body>

                                    {product.products.map((ele, ind) => (
                                        <div class="form-check">
                                            <input key={ind}
                                                id={ele.id}
                                                onClick={() => handleChange(ele)} className={ele.id === active ? active : "deactive"}
                                                class="form-check-input" type="checkbox" value={ele.brand} />
                                            <label class="form-check-label" for="defaultCheck1">
                                                {ele.brand}
                                            </label>
                                        </div>


                                    ))}

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Title</Accordion.Header>
                                <Accordion.Body>
                                    <div class="input-group">
                                        <input name='title'
                                            type="search"
                                            class="form-control rounded"
                                            placeholder="Search"
                                            aria-label="Search" aria-describedby="search-addon"
                                            onChange={onChange} value={title.title} />
                                        <button type="button" class="btn btn-outline-primary" onClick={() => filterTitle(title.title)}>search</button>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Sort</Accordion.Header>
                                <Accordion.Body>


                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>In stock</Accordion.Header>
                                <Accordion.Body>

                                    {product.products.map((ele, ind) => (
                                        <div class="form-check">
                                            <input key={ind}
                                                id={ele.id}
                                                onClick={() => handleChange(ele)}
                                                className={ele.id === active ? active : "deactive"}
                                                class="form-check-input" type="checkbox" value={ele.stock} />
                                            <label class="form-check-label" for="defaultCheck1">
                                                {ele.stock}
                                            </label>
                                        </div>


                                    ))}


                                </Accordion.Body>
                            </Accordion.Item>


                        </Accordion>
                    </Col>
                    <Col rm={4}>
                        {filterProduct.length > 0 && (
                            <div className='my-product'>
                                <a href='#' onClick={returnToAll}>return to all product</a>
                                {filterProduct.map(ele => (
                                    <EachProductFilter key={ele.id} product={ele}></EachProductFilter>

                                ))}


                            </div>
                        )}
                        {filterProduct.length < 1 && (
                            <div className='my-product'>
                                <h1 className='text-center'>All Product</h1>
                                <Product props={product.products} />
                            </div>

                        )}
                        {filterProduct.length < 1 && (
                            <div className='my-product please-wait'>Please wait....</div>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
