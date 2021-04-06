import React from 'react'
import './Card.css'
import PropTypes from 'prop-types' ;

const Cards = ({name , bio, profession , image, Alert}) => {
    return (
        <div className="card">
            <div onClick={()=>  Alert(name)}  style={{cursor:"pointer"}} >
            <img src={image} alt="" />
            </div>
            <div className="name">
                <h3>Full Name :</h3>
                <h4>{name}</h4>


            </div>

            <div className="Bio">
            <h3>BIO :</h3> <br/>
            <h4>{bio}</h4>
            </div>
            <div className="Pro">
                <h3>Profession :</h3>
                <h4>{profession}</h4>
            </div>
        </div>
    )
}
Cards.propTypes = {

    name : PropTypes.string ,
    bio : PropTypes.string ,
    profession:PropTypes.string ,
    image : PropTypes.string ,
    Alert : PropTypes.func
    
    
    
    
    }

export default Cards