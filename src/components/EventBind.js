import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
     clickHandler(){
         this.setState({
             message: 'Good Bye!'
         })
     }
    // clickHandler = () => {
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    // }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <!-- Event bind in render method --> 
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <!-- using Arrow functions --> 
                <button onClick={()=>this.clickHandler()}>Click</button> */}
                {/* <!-- Binding event handler in Constructor --> 
                <button onClick={this.clickHandler}>Click</button> */}
                 {/* <!-- using Arrow functions as in class property --> */}
                <button onClick={this.clickHandler}>Click</button> 
                
            </div>
        )
    }
}

export default EventBind
