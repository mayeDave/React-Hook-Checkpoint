import React from 'react'

const MovieCard = ({title, description, image, rating}) => {
    const style = {
        div: {
            border: '1px solid black',
            padding: '10px',
            margin: '10px 50px',
            
            borderRadius: '10px',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto'
        },
        h1: {
            color: 'red'
        },
        p: {
            color: 'green',
            fontSize: '20px'
        },
        img: {
            width: '200px',
            height: '300px'
        }
    }
  return (
    <div style={style.div}>
      <h1 style={style.h1}>{title}</h1>
      <p style={style.p}>{description}</p>
      <img src={image} alt={title} style={style.img} />
      <p style={style.p}>Rating: {rating}</p>
    </div>
  )
}

export default MovieCard