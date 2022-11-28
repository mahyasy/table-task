import React from 'react';
import { v4 } from 'uuid';
import {FaUserEdit,FaTrash} from 'react-icons/fa';

const Tbody = ({arr,Del}) => {
  return (
    <>
    <tbody>
      {arr.map((item)=>(
        <tr key={v4()}>
          <th scope='row'>{arr.indexOf(item)+1}</th>
          <td ><input className='inps' /></td>
          <td><FaUserEdit/></td>
          <td><FaTrash onClick={(e)=>Del(e,arr.indexOf(item))} /></td>

        </tr>
      ))}

    </tbody>
    </>
  )
}

export default Tbody