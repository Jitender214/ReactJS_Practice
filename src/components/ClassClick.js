import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log('Clicked the button using class click')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class compoent Click Me</button>
            </div>
        )
    }
}

export default ClassClick
