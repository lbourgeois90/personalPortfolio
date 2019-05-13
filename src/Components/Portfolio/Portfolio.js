import React, { Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Link from '@material-ui/core/Link';
import './Portfolio.css'


const tutorialSteps = [
  {
    label: 'ActivatEd: Educational Content Distribution Application',
    githubLink: 'https://github.com/lbourgeois90/activated',
    imgPath:
      '/images/createAnActivatorDemo.mov',
  },
  {
    label: 'Server Side Calculator',
    githubLink: 'https://github.com/lbourgeois90/serversidecalculator',
    imgPath:
      '/images/ServiceSideCalculatorDemo.mov',
  },
  {
    label: 'Feedback Form',
    githubLink: 'https://github.com/lbourgeois90/redux-feedback',
    imgPath:
      '/images/feedback.mp4',
  },
  {
    label: 'Creature of Harry Potter Gallery',
    githubLink: 'https://github.com/lbourgeois90/react-gallery-items',
    imgPath:
      '/images/gallery.mp4',
  },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  // },
];

const styles = theme => ({
  root: {
    maxWidth: '80%',
    flexGrow: 1,
    margin: '0 auto',
    height: '100%',
    textAlign: 'center',
  },
  header: {
    height: 100,
    backgroundColor: 'black',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: 50
  },
  img: {
    height: 400,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '80%',
    margin: '0 auto',
  },
  mobileStepper:{
    backgroundColor: 'black',
    color:'#66FCF1',
    width: '80%',
    margin: '0 auto',
  },
  buttons:{
    color: '#66FCF1',
  },
  link:{
    color: '#FD4531',
    fontSize: 28,
    textDecoration: 'none',
    fontFamily: 'Oswald',
  }

  
});



class Portfolio extends Component {

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography style={{color: '#C4073F', fontSize: 36, fontFamily: 'Oswald'}}>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        {/* <video autoplay="" loop="" muted="" data-reactid=".0.1.0.0" height="400px">
          <source type="video/mp4" data-reactid=".0.1.0.0.0" className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}/>
        </video> */}
        <a href={tutorialSteps[activeStep].githubLink} target="_blank" className={classes.link}>See Github Repo</a>
        <br/>
        <br/>
        <video className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
          type="video/mp4"
          autoplay="" 
          loop="" 
          muted="">
           </video>
        
        {/* <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        /> */}
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          variant="dots"
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1} className={classes.buttons}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0} className={classes.buttons}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Portfolio);