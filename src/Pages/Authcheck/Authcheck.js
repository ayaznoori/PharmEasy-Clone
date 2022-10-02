import React from 'react'
import {useNavigate} from "react-router-dom";
import {useState} from 'react'
const Authcheck = ({children}) => {
  const [data,setdata]=useState(JSON.parse(localStorage.getItem('userdetail')||null))
 const navigate=useNavigate();
 if(data){
    navigate('/')
 }
 else
  return children;
}

export default Authcheck