import React from 'react'

const Plan = ({item,handleDelete}) => {
    return (
        <>

        {item.map((items, i) =>{
            return (
                <>
                <li className="shadow p-2 my-2 col-sm-8">{items}</li>  
             <button  className="btn btn-danger col-sm-3 my-2 offset-1" onClick={()=>handleDelete(i)}>X</button> 
                </>
            )
        })}
        </>
       )
}

export default Plan





