import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicSelect from "./RegionSelector";
import EditIcon from "@mui/icons-material/Edit";
import { useGlobalContext } from "../context/Context";

const PlanCard = () => {
  const { price, region } = useGlobalContext();
  const deletHandler = () => {
    // return region.pop();
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Card variant="outlined">
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }} component="div">
                Basic Plan
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                }}
                component="div"
              >
                ${price}
              </Typography>
            </Grid>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Quarterly Plan
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              One region included in your plan
            </Typography>
            <BasicSelect />
            {region.length === 0 ? (
              ""
            ) : (
              <Grid sx={{ mt: 0 }} container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="body2">{region}</Typography>
                </Grid>

                <Grid item xs={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography variant="body2">Free</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2">$0.00</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <EditIcon
                        onClick={deletHandler}
                        color="warning"
                        sx={{ cursor: "pointer" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default PlanCard;
