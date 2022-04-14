import React, {useRef} from 'react';
import Slick from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight, faHeart} from '@fortawesome/free-solid-svg-icons';

import {Row, Col, Button, Image, ArrowLeft, ArrowRight} from 'react-bootstrap';
import './Products.scss';

const Products = ({posts}) => {

  
    const slider = useRef(null);

    const settings = {
        
        infinite: true,
        speed: 500,
        variableWidth:true,
        slidesToScroll: 6,
        slidesToShow: 2
      };

    return (
       <>
       <div className='text-center text-color m-5'> 
            <h2>Our Top Products</h2>
            <p>Lorem ipsun dolor sit amet</p>
        </div>
        <Slick ref={slider} {...settings} >
            {posts.map(({id, image, title, text, action})=> (
              

                <Col className='shadow p-3 mb-5 bg-body rounded d-flex flex-column width ' xs={12} lg={3} key={id} > 
                     <div>

                        <Image src={image}/> 
                        <FontAwesomeIcon className='heart' icon={faHeart} />
                        <h2 className='width'>{title}</h2>
                        <p>{text}</p>
                    </div>  
                    <div className='carousel__button'>
                        <Button className='carousel__button-btn'>{action}</Button>     
                    </div>      
                           
                </Col>      
              
            ))}
        </Slick>
        <div className='d-flex justify-content-center button'>
            <button className='btn' onClick={() => slider?.current?.slickPrev()}>
                <FontAwesomeIcon 
                    icon={faChevronLeft}
                />
                </button>
            <button className='btn' onClick={() => slider?.current?.slickNext()}>
                <FontAwesomeIcon 
                    icon={faChevronRight}
                />
            </button>
        </div>


            
       </>
        

        /* <div className='text-center aligment'>
            <h2>Our Top Products</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur</h5>
        </div>
        <Row className='m-5'>
            {posts&&posts.map(({id, image, title, text, action})=> (
            <Col className='shadow p-3 mb-5 bg-body rounded' xs={12} lg={3} key={id} >          
                <Image src={image}/> 
                <h2>{title}</h2>
                <p>{text}</p>
                <Button>{action}</Button>             
            </Col>      
           ))}
        </Row> */
       
       
    
    );
}

export default Products;