import logo from './logo.svg';
import './App.css';
import FormHandler from './components/FormHandler';
import Output from './components/Output';
import { useState } from 'react';

function App() {
  const [list,setList]=useState(['Study','Bath','Puja','Lunch']);
  return (
    <>
    <h1 className='name flex justify-center items-center'>TO DO LIST</h1>
    <hr/>
    <FormHandler setList={setList}/>
    <Output list={list} setList={setList}/>
    </>
  );
}

export default App;
