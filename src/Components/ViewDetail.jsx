import React,{useState,useEffect} from 'react'
import '../App.css';
import {useNavigate} from 'react-router-dom' 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ViewDetail = (blog) => {
    const navigate = useNavigate()
    

    function handle(){
        navigate('/update')
    }
   console.log(blog)



  return (
    <div className='App'>
        <nav className="bg-dark navbar-dark">
                <div className="container">
                    <form className="form-inline">
                        <input className="form-control mr-sm-0" type="search" placeholder="Search Blog" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <section id="header" className="jumbotron">
                <h4 className="display-3 text-center">Blog website</h4>
              

            </section>
            <Row>
                
                    <Col sm={4}>
                        <Card style={{ width: '18rem' ,marginTop:"40px",marginLeft:"40px" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{blog.blog.title}</Card.Title>
                                <Card.Text>
                                   {blog.blog.description}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>handle()}>Edit</Button>
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>

                    </Col>


            
            </Row>
    </div>
  )
}
