import React from 'react'

const page = () => {
  return (
    //this is group route example without affecting url 
    // URL will be localhost:3000/addProject instead of  localhost:3000/grouproute/addProject  
    <div className='text-center bg-amber-100 h-full w-full'>This is group route example.</div>
  )
}

export default page