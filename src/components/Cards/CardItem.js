import React from 'react';
import numeral from 'numeral';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
   root: {
      minWidth: '100%',
      borderTop: (props) => `8px solid ${props.borderColor}`,
      cursor: 'pointer',
   },
   title: {
      fontSize: 16,
   },
   pos: {
      marginTop: 12,
   },
});

export default (props) => {
   const { title, today, total, date, onHandler } = props;
   const classes = useStyles(props);

   return (
      <Card className={classes.root} onClick={onHandler}>
         <CardContent>
            <Typography
               className={classes.title}
               color="textSecondary"
               gutterBottom
            >
               {title}
            </Typography>
            <Typography variant="h5" component="h2">
               {numeral(today).format('+0.00a')}
            </Typography>
            <Typography className={classes.pos}>
               {`${numeral(total).format('0.00a')} Total`}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
               {new Date(date).toDateString()}
            </Typography>
         </CardContent>
      </Card>
   );
};
