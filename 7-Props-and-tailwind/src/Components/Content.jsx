import React from 'react'

function Content({DirectlyUsing = "Default Value"}) 
// Also giving the default value and here we can use the value of a props directly without using props.key
{
  return (
    <div className='mb-5'>
      
      In this we are gonna take the props directly without using props. 
      <br/>
      {DirectlyUsing}
    </div>
  )
}

export default Content

