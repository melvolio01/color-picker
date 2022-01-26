import React, { PureComponent } from 'react'
import MiniPalette from './MiniPalette'
import './MiniPalette.css'

class PaletteList extends PureComponent {
    render() {
        const  { palettes } = this.props;
        return (
            <div className='palette-list'>
                {palettes.map(palette => {
                    return <MiniPalette palette={palette} />
                })}
            </div>
        )
    }
}

export default PaletteList