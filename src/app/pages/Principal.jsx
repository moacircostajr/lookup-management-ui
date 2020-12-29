import React from 'react'
import '../../App.css'
// import SimpleMap from '../components/SimpleMap'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    margem: {
    	margin: 'auto',
    }
  }),
);

export default function Principal() {

	const classes = useStyles();

	return (
	<div className={classes.margem}>
		<Grid container spacing={1}>
			Gráficos
		</Grid>
	</div>
	)
}
