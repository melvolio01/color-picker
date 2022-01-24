import React, { PureComponent } from 'react'
import Slider from 'rc-slider';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Pallette.css'

class Pallette extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            paletteHue: 400 
        }

        this.changeHue = this.changeHue.bind(this);
    }

    changeHue = (hue) => {
        this.setState({ paletteHue: hue});
    }

    render() {
        const { paletteHue } = this.state
        const {colors } = this.props.palette
        return (
            <div className="pallette">
                <Slider defaultValue={paletteHue} min={100} max={900} onAfterChange={this.changeHue} step={100}/>
                <div className='pallette-colors'>
                    {colors[paletteHue].map(color => {
                        return <ColorBox name={color.name} color={color.hex} />
                    })}
                </div>
            </div>
        )
    }
}

export default Pallette