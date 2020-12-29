import React from 'react'
import '../../App.css'
import TabelaUsuarios from '../components/TabelaUsuarios'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';


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

export default function Usuarios() {

	const classes = useStyles();

	return (
	<div className={classes.margem}>
		<Grid container spacing={1}>
			<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
	    		<TabelaUsuarios />
			</Grid>
		</Grid>
	</div>
	)
}
