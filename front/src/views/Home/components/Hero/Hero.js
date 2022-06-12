import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(() => ({
  image: {
    objectFit: 'cover',
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title={
                <span>
                  <Typography component="span" variant="inherit" color="primary">
                  Feel secure,
                  </Typography>{' '}
                  take it to the next level 
                </span>
              }
              subtitle="Our mission is to spread education that is easy accessible and everyone can learn."
              ctaGroup={[
                <Button variant="contained" color="primary" size="large">
                  Start now
                </Button>,
              ]}
              align="left"
              titleVariant="h3"
            />
          </div>
        }
        rightSide={
          <Image
           src="https://assets.maccarianagency.com/the-front/photos/elearning/elearning.jpg"
            srcSet="https://assets.maccarianagency.com/the-front/photos/elearning/elearning@2x.jpg 2x"
            //srcSet="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="..."
            className={classes.image}
            lazyProps={{
              width: '100%',
              height: '100%',
            }}
          />
        }
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   * fdfghjklmù
   */
  className: PropTypes.string,
};

export default Hero;
