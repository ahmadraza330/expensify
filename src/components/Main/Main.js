import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Divider,
  List,
} from "@material-ui/core";

import Form from "./Form/Form";
import ListItem from "./List/List";
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powerd by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $100
        </Typography>

        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          Try saying: Add income for $100 in Category
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ListItem />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
