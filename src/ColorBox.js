import React, { PureComponent } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

class ColorBox extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const { name, color } = this.props;
        return (
            <CopyToClipboard text={color} >
                <div className='color-box' style={{ background: `${this.props.color}`}}>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <span className='see-more'>More</span>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox