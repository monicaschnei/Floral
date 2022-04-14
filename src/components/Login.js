import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';


const Login =({fakeAuth}) =>{
    
    
    const [login, setLogin] = useState ();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    

    const handleSubmit = () => {
    console.log ("submit");
    fakeAuth.login(login, password, navigate('/meuCarrinho/*'));
    
    };


    return (
        <>
        <div className='d-flex flex-column align-items-center'>
            <h2 className='formulario_title'>Login Page</h2>
            <p className='formulario_paragraph'>Please add you login and password </p>
       
        <Form className='w-50' >
             <Form.Group className="mb-3" controlId="example">
                <Form.Label>Login</Form.Label>
                <Form.Control 
                type="login" 
                value={login} onChange={(e) => setLogin (e.currentTarget.value)}
                placeholder="Your login" 
               
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="121313">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                value={password} onChange={(e) => setPassword (e.currentTarget.value)}
                placeholder="password" 
                
                />
            </Form.Group>
            
            <div className='d-flex justify-content-center'>

                <Button 
                    className='formulario_button'
                    onClick={handleSubmit}
                   
                >
                    Send 
                </Button>
            </div>
            
        </Form>
        </div>
      
        </>
    )
}

export default Login;