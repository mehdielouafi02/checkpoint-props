import React from 'react'
import Data from './Data'
import Cards from './Cards'

const Cardlist= () => {

    const Alert = x => alert(x) ;


    return (
        <div>
            {
            Data.map((el,i) => (
            <Cards key={i} name={el.name} image={el.image} bio={el.bio} profession={el.profession} Alert={Alert}/> )           )}
        </div>
    )
}

export default Cardlist