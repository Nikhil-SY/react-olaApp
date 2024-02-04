import React from 'react'
import { Card } from 'react-bootstrap'
import { Data } from './Data'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>
    <NavBar/>
    <Outlet/>
    <div className='row '>
    
    {Data.map((product)=>(
        <div className='col-md-4 mb-2 col-sm-6 col-lg-3 mx-auto'>
        <Card style={{ width: '18rem' }} className='h-100 ' >
        <Card.Img variant="top" src={product.imgs} alt='Error loading' height={180} width={35}/>
        <Card.Body>
          <Card.Title>{product.text}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          
        </Card.Body>
       
      </Card>
      </div>
    ))}
   
    </div>
    </div>
  )
}
