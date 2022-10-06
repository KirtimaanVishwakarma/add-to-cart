import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGlobalContext } from "../context/Context";

const PaidRegionCard = ({ name, ind }) => {
  const { setPaidRegion } = useGlobalContext();
  const deletHandler = () => {
    setPaidRegion((oldItem) => {
      return oldItem.filter((arr, index) => {
        return index !== ind;
      });
    });
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="body2">{name}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body2">Paid</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">$9.00</Typography>
            </Grid>
            <Grid item xs={4}>
              <DeleteIcon
                onClick={deletHandler}
                color="warning"
                sx={{ cursor: "pointer" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PaidRegionCard;
