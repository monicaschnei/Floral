import React from 'react';
import {Col, Row} from 'react-bootstrap'


const Final= ({postFinal}) => {
   console.log(postFinal) 

    return (
        <Row>
          {postFinal.map(({ id, title, text }) => (
            <Col lg={4} key={id}>
              <h2> {title}</h2>
              <ul>
              {text.map(({ text1 }) => (
                
                  <li>{text1}</li>
               
              ))}
              </ul>
            </Col>
          ))}
        </Row>
      );
    };
    
     export default Final;
    
    /* 
                <Row>
                    <Col>
                        <h2> {title}</h2>
                        <Row><a>{text}</a></Row>
                        <Row><a>jmgf</a></Row>
                        <Row><a>jmgf</a></Row>
                        <Row><a>jmgf</a></Row>
                        
                    </Col>
                    <Col>
                        <h2> About</h2>
                        <Row><a>jmgf</a></Row>
                        <Row><a>jmgf</a></Row>
                        <Row><a>jmgf</a></Row>
                        <Row><a>jmgf</a></Row>
                    </Col>
    
                    <Col>
                        <h2> About</h2>
                        <Row><a>jmgf</a></Row>
                        <Row><a>jmgf</a></Row>
                        <Row><a>jmgf</a></Row>
                        <Row><a>jmgf</a></Row>
                    </Col>
                </Row>
            */