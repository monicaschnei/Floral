import React, {useState} from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lista from './components/Lista';
import Posts from './data/Posts';
import Products from './components/Products';
import PostProducts from './data/PostProducts';
import Movie from './components/Movie';
import Sale from './components/Sale';
import PostPrincipal from './data/PostPrincipal';
import Principal from './components/Principal';
import Formulario from './components/Formulario';
import Final from './components/Final'
import PostFinal from './data/PostFinal';
import Home from './components/Home';
import Login from './components/Login';
import MeuCarrinho from './components/MeuCarrinho';

function App() {

  const fakeAuth = {
    login(login, password, cb) {
      setLogin(login);
      setPassword(password);
      setTimeout(cb, 100);
    },
    logout(cb) {
      setLogin();
      setPassword();
      setTimeout(cb, 100);
    },
  };

  const [login, setLogin] = useState ();
  const [password, setPassword] = useState();
  const isLogged = login && password;

  const PrivateRoute = ({ Component, logged }) => {
    return logged ? <Component login={login} password={password} /> : <Navigate to={'/login'}/> 
  };

  return(
    <>
    <Navbar   
        logged={isLogged}
        auth={fakeAuth}/>
     <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path='/login' element = {<Login fakeAuth={fakeAuth}/>}/>
        <Route path="/meuCarrinho/*" element={<PrivateRoute Component={MeuCarrinho} logged={isLogged}/>}  /> 
    </Routes>
    <Final postFinal={PostFinal}/>
    </>
  )
 
  // return(
  //   <>
  //   <Navbar/>
  //   <Hero/>
  //   <Lista posts={Posts}/>
  //   <Products posts={PostProducts} />
  //   <Movie/>
  //   <Sale/>
  //   <Principal posts={PostPrincipal}/>
  //   <Formulario/>
  //   <Final postFinal={PostFinal}/>
  //   </>
  // )
}

export default App;
