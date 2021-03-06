import React, { PureComponent } from 'react'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'

const styles = {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center' 
    },
    container: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    nav: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

class PaletteList extends PureComponent {
    render() {
        const  { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}><h1>React Colors</h1></nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => {
                            return <MiniPalette palette={palette} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)