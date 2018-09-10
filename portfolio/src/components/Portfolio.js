import React from 'react';

const Portfolio = (props) => {
    console.log(props)
    return (
        <div>   
            <p>This is Portfolio</p>
            <p>{props.match.params.id}</p>
        </div>
    );

}

export default Portfolio;