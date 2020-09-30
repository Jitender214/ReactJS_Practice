import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increment(){
        this.setState({
            count: this.state.count+1
        },()=>{console.log('value is',this.state.count);
        })
        //below console statement is executing before setState method.
        //if we want to check the increment value after setStage then we need pass as callback function
        //console.log(this.stage.count)
    }


    render() {
        return (
            <div>
                <div>Count is -{this.state.count}</div>
                <button onClick = {()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
 