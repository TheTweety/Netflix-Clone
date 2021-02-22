import React from 'react'; 
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'; 
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder'; 
import Typography from '@material-ui/core/Typography'; 
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'; 

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  }, 
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  }, 
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(7, 0, 6),
    
  },
  cardHeader: {
    backgroundColor: '#dc1a27',
    color:'#D1D0CF',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
    
  },
  customPricingHeadings:{
      color:'#dc1a27',
  },
  customPricingHeadings:{
        color:'#dc1a27',
    },
    customPricingSecondary:{
        color:'#D1D0CF',
    },

    customCard:{ 
        boxShadow: '10px 0 10px black',
    },  

    customPricingHeadingsInitialTitle:{ 
        color: '#D1D0CF',
        //boxShadow: `10px 0 10px black`,
        padding: `2vw`,
    },

  customPricingButton:{
      backgroundColor:'#dc1a27',
      color:'white', 
      '&:hover': {
        background: '#cf1925',  
     } 
  },
  
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
   // boxShadow: `7px 0 10px black`,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: '',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function PricingGuestContainer() {
  const classes = useStyles();

  return (
    <React.Fragment> 
      <Container maxWidth="md" className={classes.heroContent} component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card className={classes.customCard} >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" className={classes.customPricingHeadings}>
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" className={classes.customPricingSecondary}>
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} className={classes.customPricingButton}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> 
    </React.Fragment>
  );
}