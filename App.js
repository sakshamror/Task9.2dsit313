import React from 'react';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import PostForm from './PostForm';
import NavBar from './NavBar';
import FindQuestion from './FindQuestion';
import Plans from './Plans';
import PaymentWrap from './paymentWrap';


function App() {
  return (
    <Routes>

    <Route path='/' element ={<NavBar />} />
    <Route path='/postform' element={<PostForm/>}/>
    <Route path='/find-question' element={<FindQuestion/>}/>
    <Route path='/plans' element={<Plans/>}/>
    <Route path='/payment' element={<PaymentWrap/>}/>
    


    </Routes>
  );
}

export default App;