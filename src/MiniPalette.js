import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import { findByLabelText } from '@testing-library/react';

const styles = {
    root: {
      backgroundColor: 'white',
      borderRadius: '5px',
      border: '1px solid teal',
      padding: '0.5rem',
      overflow: 'hidden',
      position: 'relative',
      '&:hover': {
        cursor: 'pointer'
      } 
    },
    colors: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '150px',
        borderRadius: '2px',
        overflow: 'hidden'
    },
    color: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        position: 'relative',
        marginBottom: '-3.5px'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        fontSize: '1rem',
        marginLeft: '0.5rem'
    }
}

function MiniPalette(props) {
    const { palette: { paletteName, emoji, colors, id }, classes } = props;
    return (
        <div className={classes.root}>
           <div className={classes.colors}>
               {/* Miniature color boxes */}
               {colors.map(color =>  <div className={classes.color} style={{backgroundColor: color.color}}></div>)}
           </div>
           <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>  
    )
}

export default withStyles(styles)(MiniPalette);