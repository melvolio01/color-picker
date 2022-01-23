import React, { PureComponent } from 'react'
import './ColorBox.css'

class ColorBox extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log(this.props.color);
        return (
            <div className='ColorBox' style={{ background: `${this.props.color}`}}>{this.props.name}</div>
        )
    }
}

export default ColorBox