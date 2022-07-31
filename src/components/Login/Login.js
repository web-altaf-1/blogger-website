import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PreLoader from '../PreLoader/PreLoader';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Diary
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();



export default function SignIn() {
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  

  const [isTrue, setIsTrue] = React.useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log({ email, password });

    
    if (email == '') {
      toast('Email must be needed to login')

    }
    if (email !== '') {
      signInWithEmailAndPassword(email, password);

    }
    
    if (password !== '') {
      signInWithEmailAndPassword(email, password);

    }
    else {
      toast('You must be fill up login form by Email and password')
    }



  };





  if (user) {
    toast('User Login successfull');

    navigate('/');

  }


  if (loading) {
    return <PreLoader />
  }

  if (error) {
    toast(error.message);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox

                onChange={e => {
                  setIsTrue(e.target.checked);

                  if (!isTrue) {
                    document.getElementById('password').setAttribute('type', 'text');

                  }

                  else {
                    document.getElementById('password').setAttribute('type', 'password');
                  }
                }}
                value="checkedA"
                inputProps={{
                  'aria-label': 'primary checkbox',
                }}
              />}
              label="Show Password"
            // onClick={toogle}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/register' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <SocialLogin></SocialLogin>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}