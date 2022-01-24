import React, { PureComponent } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

class ColorBox extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            copied: false
        }

        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false}), 1500)
        })

    }

    render() {
        const { name, color } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={color} >
                <div className='color-box' style={{ background: `${color}`}} onClick={this.changeCopyState}>
                    <div style={{ background: `${color}` }} className={`copy-overlay ${copied && 'show'}`} />
                    <div className={`copy-message ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p>{`${name}: ${color}`}</p>
                    </div>
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