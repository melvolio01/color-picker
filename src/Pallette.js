import React, { PureComponent } from 'react'
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Pallette.css'

class Pallette extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            paletteHue: 400,
            format: 'hex'
        }

        this.changeHue = this.changeHue.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeHue = (hue) => {
        this.setState({ paletteHue: hue});
    }

    changeFormat = (format) => {
        this.setState({ format: format });
    }

    render() {
        const { paletteHue, format } = this.state
        const {colors } = this.props.palette
        return (
            <div className="pallette">
               <Navbar hue={paletteHue} changeHue={this.changeHue} changeFormat={this.changeFormat} />
                <div className='pallette-colors'>
                    {colors[paletteHue].map(color => {
                        return <ColorBox name={color.name} color={color[format]} />
                    })}
                </div>
            </div>
        )
    }
}

export default Pallette