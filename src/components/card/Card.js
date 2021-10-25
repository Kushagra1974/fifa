import React from 'react'

import classes from "./card.module.css"

function Card({ data }) {
    return (
        <div className={classes.card}>
            <h3 className={classes.heading}>Name : {data.Name}</h3>
            <p>Club : {data.Club}</p>
            <p>Nationality : {data.Nationality}</p>
            <p>Position : {data.Position}</p>
        </div>
    )
}

export default Card
