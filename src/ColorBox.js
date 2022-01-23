import React, { PureComponent } from 'react'
import './ColorBox.css'

class ColorBox extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const { name } = this.props;
        return (
            <div className='color-box' style={{ background: `${this.props.color}`}}>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>More</span>
            </div>
        )
    }
}

export default ColorBox