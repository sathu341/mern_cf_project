import React from 'react'

export default function Userhome() {
    let userid= localStorage.getItem('userid')
  return (
<>
   <h1>
    {
      userid
    }
   </h1>
</>
  )
}
