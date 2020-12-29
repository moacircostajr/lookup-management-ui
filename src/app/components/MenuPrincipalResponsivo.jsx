import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { Menu, MenuList, MenuItem, Badge } from '@material-ui/core';
import { fade, makeStyles, useTheme, createStyles } from '@material-ui/core/styles';

import BusinessIcon from '@material-ui/icons/Business';
import LabelIcon from '@material-ui/icons/Label';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import NoteIcon from '@material-ui/icons/Note';
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/img/lookup-shop-f-branco.svg'

import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'



const drawerWidth = 240;

const useStylesOptToolbar = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
)


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      // backgroundColor: theme.palette.common.white,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function MenuPrincipal2(props) {
  const history = useHistory()
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classesOptToolbar = useStylesOptToolbar()
  
  const [statusBotaoEmpresas, setStatusBotaoEmpresas] = useState()
  const [statusBotoesAplicacao, setStatusBotoesAplicacao] = useState()
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userta!Kahb3'))
    !user.is_staff ? setStatusBotaoEmpresas('none') : setStatusBotaoEmpresas('line')
  }, [history])

  useEffect(() => {
    statusBotaoEmpresas === 'line' ? setStatusBotoesAplicacao('none') : setStatusBotoesAplicacao('line')
  }, [statusBotaoEmpresas])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }


  const drawer = (
    <div>

      <RouterLink to="/principal">
        <div className={classes.toolbar} style={{padding: 10}}><Logo /></div>
      </RouterLink>
      
      <Divider />
      <MenuList>
        <ListItem button style={{display: statusBotoesAplicacao}}>
          <ListItemIcon><LocalMallIcon /></ListItemIcon>
          <ListItemText primary="Vendas" />
        </ListItem>
      </MenuList>
      <Divider />
      <MenuList>
            <ListItem button style={{display: statusBotoesAplicacao}} onClick={() => history.push('/produtos')}>
              <ListItemIcon><LabelIcon /></ListItemIcon>
              <ListItemText primary="Produtos" />
            </ListItem>
            <ListItem button style={{display: statusBotoesAplicacao}} onClick={() => history.push('/clientes')}>
              <ListItemIcon><LabelIcon /></ListItemIcon>
              <ListItemText primary="Clientes" />
            </ListItem>
            <ListItem button style={{display: statusBotoesAplicacao}}>
              <ListItemIcon><NoteIcon /></ListItemIcon>
              <ListItemText primary="Despesas" />
            </ListItem>
            <ListItem button style={{display: statusBotoesAplicacao}}>
              <ListItemIcon><NoteIcon /></ListItemIcon>
              <ListItemText primary="Caixa" />
            </ListItem>
            <ListItem button style={{display: statusBotoesAplicacao}} onClick={() => history.push('/usuarios')}>
              <ListItemIcon><LabelIcon /></ListItemIcon>
              <ListItemText primary="Usuários" />
            </ListItem>
            <ListItem button style={{display: statusBotaoEmpresas}} onClick={() => history.push('/empresas')}>
              <ListItemIcon><BusinessIcon /></ListItemIcon>
              <ListItemText primary="Empresas" />
            </ListItem>
      </MenuList>
    </div>
  );

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><RouterLink to="minhaconta">Minha conta</RouterLink></MenuItem>
      <MenuItem onClick={() => {localStorage.removeItem('tokenaiChug4e'); /*localStorage.removeItem('userta!Kahb3');*/ history.push('/login');}}>Sair</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            Lookup Management
          </Typography> */}
          <div className={classesOptToolbar.grow} />
          <div className={classesOptToolbar.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classesOptToolbar.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        {renderMobileMenu}
        {renderMenu}
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { props.children }
      </main>
    </div>
  );
}
