import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {
  useMediaQuery,
  Button,
  Avatar,
  Typography,
  Grid,
  Divider,
  Box,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { CardProduct, SectionAlternate } from 'components/organisms';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {Tags } from '../Tags';
import{tags} from '../../data'
const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  sectionAlternate: {
    '& .section-alternate__content': {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
      },
    },
  },
  searchInputContainer: {
    background: theme.palette.alternate.main,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: theme.spacing(1),
    '& .card-product__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(0, 0, 20, 0),
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  divider: {
    marginBottom: theme.spacing(1),
  },
  button: {
    minWidth: '100%',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 420,
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.secondary.light,
    color: 'white',
    fontWeight: 300,
  },
  priceCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryIconButton: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
  },
  icon:{
    fontSize:"40px",
    "&:before":{
      content: "\f00d",
    }
  }
}));

const Result = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const BlogMediaContent = props => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = props => (
    <div className={classes.blogContent}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {props.subtitle}
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <div className={classes.priceCta} style={{border:'0px solid black'}}>
                  <Typography
                    color="secondary"
                    variant="h5"
                    className={classes.fontWeightBold}
                  >
                    $120
                  </Typography>
                  <Box>
                        <Button color="primary">
                          <CreditCardIcon/>
                        </Button>
                        <Button>
                        <ArrowRightAltIcon
                          className={classes.icon}
                          color={'secondary'}
                        />
                    
                    </Button>
                  </Box>
                </div>
      
      <Divider className={classes.divider} />
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Avatar {...props.author.photo} className={classes.avatar} />
          <Typography variant="body2" color="textPrimary">
            {props.author.name}
          </Typography>
        </div>
        <Typography variant="overline" color="textSecondary">
          {props.date}
        </Typography>
      </div>
    </div>
  );

  return (
    <div className={className} {...rest}>
      
      <SectionAlternate className={classes.sectionAlternate}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid  item xs={12} container justifyContent='center'>
            <Tags data={tags}/>
          </Grid>
          <Grid item xs={12} container>
            <Typography variant="body1" className={classes.answerCount}>
              85 Result Found
            </Typography>
          </Grid>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
              <CardProduct
                withShadow
                liftUp
                className={classes.cardProduct}
                mediaContent={
                  <BlogMediaContent {...item.cover} alt={item.title} />
                }
                cardContent={
                  <BlogContent
                    title={item.title}
                    subtitle={item.subtitle}
                    author={item.author}
                    date={item.date}
                  />
                }
              />
            </Grid>
          ))}
          <Grid item xs={12} container justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              Load more
            </Button>
          </Grid>
        </Grid>
      </SectionAlternate>
    </div>
  );
};

Result.propTypes = {
 
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
  
};

export default Result;
