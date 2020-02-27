/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid,react/no-unescaped-entities */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ChevronLeftRounded from '@material-ui/icons/ChevronLeftRounded';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

const styles = ({ breakpoints, palette }) => {
  const backDropBG = 'rgba(0,0,0,0.7)';
  return {
    root: {
      width: '100%',
      textAlign: 'left',
      height: 700,
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#ffffff',
      [breakpoints.only('xs')]: {
        position: 'relative',
        height: 566,
      },
    },
    appBar: {
      background: 'none',
    },
    toolbar: {
      minHeight: 64,
    },
    backDrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: backDropBG,
    },
    container: {
      height: '100%',
      zIndex: 2,
      position: 'relative',
    },
    brand: {
      color: '#ffffff',
      fontWeight: 900,
    },
    left: {
      flexGrow: 1,
    },
    right: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    mlNormal: {
      marginLeft: 16,
    },
    content: {
      padding: 16,
    },
    input: {
      background: 'rgba(255,255,255,0.16)',
      '&:hover': {
        background: 'rgba(255,255,255,0.24)',
      },
      '&$focused': {
        background: 'rgba(255,255,255,0.24)',
      },
    },
    inputInput: {
      color: '#ffffff',
    },
    underline: {
      '&:after': {
        borderColor: palette.primary.light,
      },
    },
    focused: {},
    inputLabel: {
      color: '#ffffff',
      opacity: 0.8,
      '&$focused': {
        opacity: 1,
        color: '#ffffff',
      },
    },
    checkbox: {
      color: 'rgba(255,255,255,0.87)',
    },
    checkboxLabel: {
      color: 'rgba(255,255,255,0.87)',
    },
    grey: {
      color: '#c5c5c5',
    },
    buttonLabel: {
      textTransform: 'none',
    }
  };
};

// DL02 = DashboardLogin02
// I think we don't have to use the full name, it's redundant.
const EmployeeLogin = withStyles(styles, { name: 'LoginPage' })(
  ({ classes }) => (
    <div className={classes.root}>
      <div className={classes.backDrop} />
      <Grid className={classes.container} container justify={'center'}>
        <AppBar className={classes.appBar} position={'absolute'} elevation={0}>
          <Toolbar className={classes.toolbar}>
            <Grid container>
              <Grid item xs container alignItems={'center'}>
              <ChevronLeftRounded />
                <Typography className={classes.grey}>
                  <Link color={'inherit'} href={'/'} underline={'none'}>
                    Back to Home
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs container>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid
          className={classes.content}
          item
          xs={12}
          sm={6}
          md={5}
          lg={4}
          container
          alignItems={'center'}
        >
          <form>
            <TextField
              fullWidth
              label={'Username'}
              margin={'normal'}
              variant="filled"
              classes={{}}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                  focused: classes.focused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.input,
                  focused: classes.focused,
                  underline: classes.underline,
                  input: classes.inputInput
                },
              }}
            />
            <TextField
              fullWidth
              label={'Password'}
              margin={'normal'}
              variant="filled"
              type={'password'}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                  focused: classes.focused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.input,
                  focused: classes.focused,
                  underline: classes.underline,
                  input: classes.inputInput
                },
              }}
            />
            <FormControl fullWidth>
              <FormControlLabel
                control={
                  <Checkbox value="checkedC" className={classes.checkbox} />
                }
                label="Remember Me"
                classes={{
                  label: classes.checkboxLabel,
                }}
              />
            </FormControl>
            <FormControl margin={'normal'} fullWidth>
              <Button
                classes={{ label: classes.buttonLabel }}
                fullWidth
                variant={'contained'}
                color={'primary'}
              >
                Log in
              </Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </div>
  ),
);

export default EmployeeLogin;
