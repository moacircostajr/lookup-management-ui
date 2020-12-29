import React, { useEffect, useState } from 'react'
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Fab, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router-dom'
import api from '../services/api'


const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell)

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow)

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    table: {
    minWidth: 700,
    },
    container: {
      height: '83vh',
    },
    botaoFab: {
      position: 'fixed',
      zIndex: 9999,
      marginLeft: '30px',
      bottom: '10vh',
    },
  }),
);



export default function TabelaProdutos() {

  const token = localStorage.getItem('tokenaiChug4e')

  const [dados, setDados] = useState([])

  useEffect(() => {
      api.get('products', {headers: {Authorization: token}}).then(response => {
        setDados(response.data)
      })
    }, [token])


  const classes = useStyles()
  const history = useHistory()

  return (
  	<div>
	    <TableContainer component={Paper} className={classes.container}>
	      <Table className={classes.table}>
	        <TableHead>
	          <TableRow>
              <StyledTableCell align="center">Descrição</StyledTableCell>
              <StyledTableCell align="center">Referência</StyledTableCell>
              <StyledTableCell align="center">Estoque</StyledTableCell>
              <StyledTableCell align="center">Preço R$</StyledTableCell>
              <StyledTableCell></StyledTableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {
              dados.map((valor, chave) => (
              <StyledTableRow hover key={chave} onClick={ () => history.push('/produto/' + valor['id']) }> 
                <StyledTableCell align="center">{valor['description']}</StyledTableCell>
                <StyledTableCell align="center">{valor['ref']}</StyledTableCell>
                <StyledTableCell align="center">{valor['quant']}</StyledTableCell>
                <StyledTableCell align="center">{valor['val']}</StyledTableCell>
                <StyledTableCell align="center"><Button variant="outlined"><SearchIcon color="primary" /></Button></StyledTableCell>
              </StyledTableRow>
                )
              )
            }
	        </TableBody>
	      </Table>
        <Fab primary className={classes.botaoFab} onClick={() => { history.push('/produto') }}>
          <AddIcon color="primary"/>
        </Fab>
	    </TableContainer>
    </div>
  )
  
}