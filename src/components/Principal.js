import react from 'react';
import {Col, Row, Button, Image} from 'react-bootstrap';
import './Principal.scss';

const Principal = ({posts}) =>{
    return (
        <>
        
        {posts.map(({id, image, title, text, action})=> (
             <>
            <Row className='Principal_row' key={id}>
                <Col lg={7} className='Principal_col1'>
                    <Image src={image}/>
                </Col>
                <Col lg={5} className=' Principal_col2 d-flex flex-column justify-content-center'>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <Button>{action}</Button>
                </Col>
            </Row>

          
              
            </>
          ))}
        </>
       
    
    )
}

export default Principal;