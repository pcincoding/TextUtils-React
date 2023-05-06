import React from 'react'

export default function Alert(props) {
  let capitalize = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }
  return (
    <div style={{height:'50px'}}>
    {props.msg && <div className={`alert alert-${props.msg.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.msg.type)}</strong>: {props.msg.mes}
</div>}
</div>
  )
}
