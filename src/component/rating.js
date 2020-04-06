import React from 'react'
// ★ ☆
const Rating = ({count , getRate}) => {
    let starsHtml = []
    for(let i = 1; i <= 5; i++) {
        if(i <= count ) {
            starsHtml.push(<span key={i} className="gold"   onClick={() => getRate(i)}>★</span>)
        }
        else {
            starsHtml.push(<span key={i}    onClick={() => getRate(i)}>☆</span>)
        }
    }
    return (
        <div>{starsHtml}</div>
    )
}

export default Rating