import React, { useState } from 'react';
import '../../App.css';
import './Login.css';
import {
	FormControl, 
	FormGroup, 
	TextField
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api'
import { ReactComponent as Logo } from '../../assets/img/lookup-shop-f-branco.svg'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    background: {
      backgroundColor: theme.palette.background.default,
    },
  }),
);



export default function Login() {
	const classes = useStyles()
	const history = useHistory()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

    async function logar() {
	    try {
			await api.post('api-token-auth/', { "username": username, "password": password }).then(response => {
				localStorage.setItem('tokenaiChug4e', 'Token ' + response.data.token)
				const token = localStorage.getItem('tokenaiChug4e')
				api.get('users/' + response.data.user_id, {headers: {Authorization: token}}).then(response => {
		    		localStorage.setItem('userta!Kahb3', JSON.stringify(response.data))
				})
			})
			history.push('/principal')			
	    } catch(err) {
	      alert('Falha no login. Por favor, tente novamente.')
	    }
    }


  	return (
  		<div className={classes.background}>
	  		<div className="centralizar-bloco-horizontal posicionar-logo">
	  			<div className="centralizar-bloco-horizontal" style={{width:900}}><Logo className="logo" /></div>
	  		</div>
		  	<div className="centralizar-bloco-horizontal">
			  	<div className="tamanho">
				    	<FormGroup className="espacamento-i">
					      <FormControl>
					    	<TextField label="Usuário" type="email" onChange={e => setUsername(e.target.value)} />
					      </FormControl>
					    </FormGroup>
					    <FormGroup className="espacamento-i">
					      <FormControl>
						  	<TextField label="Senha" type="password" onChange={e => setPassword(e.target.value)} />
					      </FormControl>
					    </FormGroup>
						<div className="botao-full-personalizado" onClick={() => {logar()}}>
							<p className="botao botao-login texto-centro-botao-login centralizar-bloco-horizontal">Entrar</p>
						</div>
					<div>
			  	    <Link className="botao" to="#">
				      <p className="alinhe-texto-centro esqueci-senha">Esqueci minha senha</p>
				    </Link>
					</div>
				</div>		  
			</div>
		</div>
    );
}

