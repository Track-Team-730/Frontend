import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
//import Button from '@material-ui/core/Button';
import '../common/navBar.css';
// const LinkToLogin = React.forwarRef((props, red) => (
//     <RouterLink ref={ref} to='/login' {...props} />
// ));
const font = "'Crimson Text', serif;";

const useStyles = makeStyles({
    appBar: {
        margin: '0 0 1rem',
        backgroundColor: '#C36',
        fontFamily: font,
    },
    toolBar: {
        border: '1px solid grey',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    company: {
        border: '1px solid grey',
        padding: '.5rem 1rem',
        fontFamily: font,
    },
    nav: {
       border: '3px solid grey',
       display: 'flex',
       alignItems: 'center', 
       justifyContent: 'center',
    //    flexFlow: 'row wrap',
       color: 'white',
       width: '50%', 
    //    justifyContent: 'space-between',
    },
    link: {
        border: '1px solid grey',
        width: '100%',
        padding: '0 1rem',
        fontSize: '1rem',
        //display: 'flex',
        // flexFlow: 'row wrap',
        //justifyContent: 'space-between',
    }
  });
export default function NavBar(){
    //const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    return (
        <AppBar position = 'static' className= {classes.appBar}>
            <Toolbar>
                <div className = {classes.toolBar}>
                    <div>
                        <Typography variant="h5" component="h2" className = {classes.company}>
                            African Marketplace
                        </Typography>
                    </div>
                    <div className = {classes.nav}>
                        {/* <Router> */}
                            <Typography variant="body2" component="h3">
                                {/* <div className = {classes.links}> */}
                                    <Link component={RouterLink} color = 'inherit' to = '/' className = {classes.link}>
                                            Home
                                    </Link>
                                    <Link component={RouterLink} color = 'inherit' to='/landing' className = {classes.link}>
                                            Items
                                    </Link>
                                {/* </div> */}
                                {/* <div className = {classes.links}> */}
                                    <Link component={RouterLink} color = 'inherit' to='/login' className = {classes.link}>
                                        Login
                                    </Link>
                                    {/* <RouterLink to = '/login'>Login</RouterLink> */} 
                                {/* </div>
                                <div className = {classes.links}> */}
                                    <Link component={RouterLink} color = 'inherit' to='/signup' className = {classes.link}>
                                        Sign Up
                                    </Link>
                                {/* </div> */}
                                    <Link component={RouterLink} color = 'inherit' to='/userpage' className = {classes.link}>
                                        Profile
                                    </Link>
                            </Typography>  
                        {/* </Router> */}
                    </div>
                </div>
                {/* <Typography variant="body2" component="h3">
                    <Link href="#" color = 'inherit' onClick={preventDefault}>
                        Link
                    </Link>
                </Typography> */}
            </Toolbar>
        </AppBar>
    );
};