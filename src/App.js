import { Grid } from "@material-ui/core";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import makeStyles from "./styles";

function App() {
  const classes = makeStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
