import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useText01CardContentStyles } from '@mui-treasury/styles/cardContent/text01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const DonationsPageCardAnonymous = () => {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useText01CardContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'} />
      <CardContent className={styles.content}>
        <TextInfoCardContent
          classes={textCardContentStyles}
          heading={'Every Donation Matters! Leave an anonymous donation today!'}
          body={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        />
        <Button color={'primary'} fullWidth className={styles.cta} href={'/donations/anonymous'}>
          Donate Anonmously Today! <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
  );
};


export default DonationsPageCardAnonymous;