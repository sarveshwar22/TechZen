// eslint-disable-next-line no-unused-vars
import { ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react'

const SubTotal = ({item}) => {

const [price,setPrice] = useState(0);

useEffect(()=>{

  totalAmount();
},[item])

const totalAmount = ()=>{

  let price = 0;
  item.map((i)=>{
    price+=i.price.cost;
  })
  setPrice(price)
  
}

  return (
    <div className="sub_item">
        <h3>Subtotal ({item.length} items):<strong style={{fontWeight:700,color:'#111'}}>Rs {price}.00</strong></h3>
    </div>
  )
}

export default SubTotal