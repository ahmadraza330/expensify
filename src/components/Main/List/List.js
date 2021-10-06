import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";

import { Delete, Money, MoneyOff } from "@material-ui/icons";
import makeStyles from "./styles";
import { ExpenseTrackerContext } from "../../../context/context";

const List = () => {
  const { state, deleteTransactions } = useContext(ExpenseTrackerContext);

  const classes = makeStyles();
  return (
    <MUIList dense={false} className={classes.list}>
      {state.map((tr) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={tr.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  tr.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={tr.category}
              secondary={`$${tr.amount} - ${tr.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransactions(tr.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
