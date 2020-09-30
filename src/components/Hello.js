import React from 'react'

//With JSX example
const Hello = () => {
    // return(
    //     <div>
    //         <h1>With JSX example</h1>
    //     </div>
    // )

// Without JSX
//createElement take 3 parameters - HTMP tag,Properties,Text for this example
    return React.createElement(
        'div',
        {id: 'hello',className: 'helloClass'},
        React.createElement('h1',null,'Without JSX Example')
        )
}

export default Hello