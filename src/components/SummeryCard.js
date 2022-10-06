import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useGlobalContext } from "../context/Context";

const SummeryCard = () => {
  const { price, region, paidRegion } = useGlobalContext();
  return (
    <>
      <Card sx={{ width: "100%" }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            Order Summery
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 700 }}
              component="div"
            >
              Basic Plan
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700 }}
              component="div"
            >
              ${price}
            </Typography>
          </Grid>

          <Typography sx={{ padding: 0, fontSize: "12px", color: "#c0c0c0" }}>
            Inclusive of all taxes
          </Typography>
          {!region ? (
            ""
          ) : (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ padding: 0, fontSize: "13px" }}>
                Free Region
              </Typography>
              <Typography
                sx={{
                  padding: 0,
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "green",
                }}
              >
                Included
              </Typography>
            </Grid>
          )}
          {paidRegion.length === 0 ? (
            ""
          ) : (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ padding: 0, fontSize: "12px" }}>
                Paid Region x {paidRegion.length}
              </Typography>
              <Typography
                sx={{
                  padding: 0,
                  fontWeight: 600,
                  fontSize: "13px",
                }}
              >
                {paidRegion.length * 9}
              </Typography>
            </Grid>
          )}
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 800, fontSize: "16px" }}
                component="div"
              >
                Total Amount
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 800, fontSize: "16px" }}
                component="div"
              >
                ${price + paidRegion.length * 9}
              </Typography>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default SummeryCard;
