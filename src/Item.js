import React from 'react'

function Item({data}) {

    //destructuring required data from object
    const {email, first_name, last_name, avatar} = data

    return (

        <div className='item'>

            <img src={avatar} alt="" />

            <div className="details">

                <p>First Name : <span>{first_name}</span></p>
                <p>Last Name : <span>{last_name}</span></p>
                <p>E-Mail : <span>{email}</span></p>

            </div>
            
        </div>
    )
}

export default Item
