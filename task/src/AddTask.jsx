import React from 'react'
import { useRef, useEffect,useState } from 'react';
import './stylesheet.scss'
import Tbody from './Tbody';

const AddTask = () => {
  const [number,setNumber] = useState(0);
  const [arr,setArr] = useState([]);
  const myArr = [{id:1}];
  useEffect(()=>{
    setArr(myArr)
  },[]);

const handleAdd =()=>{
const prevArr = arr;
prevArr.push({id:arr.length+1});
console.log(prevArr);
setNumber(number+1)


}
  const handleDel =(event,ok)=>{
  const prevArr = arr;
  prevArr.splice(ok,1);
  console.log(prevArr);
  setNumber(number+1)


}


  return (
    <div>
      <button  onClick={handleAdd} className='btn btn-primary m-4'>+ایجاد سمت جدید</button>
      <div className='container bdr'>
        <table className='table table-striped bdr'>
          <thead className='table'>
            <tr>
            <th scope='col'>ردیف</th>
            <th scope='col'>سمت</th>
            <th scope='col'>ویرایش</th>
            <th scope='col'>حذف</th>

            </tr>
           
          </thead>
          <Tbody  arr={arr} Del={handleDel}  />

        </table>

      </div>

    </div>
  )
}

export default AddTask