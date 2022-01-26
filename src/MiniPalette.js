import React from 'react'
import './MiniPalette.css'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';

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
        backgroundColor: 'gray'
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
           <div className={classes.colors}></div>
           <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>  
    )
}

export default withStyles(styles)(MiniPalette);