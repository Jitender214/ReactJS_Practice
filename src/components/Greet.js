import React from 'react'

// function Greet(props) {
//     return <h1>Hello {props.name} </h1>
//  }

const Greet = (props) => {
    console.log(props)
    return(
    <div> 
        <h1>
            Hello {props.name} from {props.address}
        </h1>
        {props.children}
    </div>
    )
}


// with Arrow functions
//const Greet = () => <h1>With Java Script Arrow functions</h1>
//if we created component like above then we can import Greet comp using any name

export default Greet