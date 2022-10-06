import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MultipleSelectPlaceholder from "./PaidRegionSelector";
import PaidRegionCard from "./PaidRegionCard";
import { useGlobalContext } from "../context/Context";

const AditionalRegionCard = () => {
  const { paidRegion } = useGlobalContext();
  return (
    <>
      <Box sx={{ width: "100%", marginTop: "10px" }}>
        <Card variant="outlined">
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            ></Grid>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Select additional regions at{" "}
              <em style={{ color: "goldenrod", fontWeight: 800 }}>$9/month</em>
            </Typography>
            <MultipleSelectPlaceholder />
            {paidRegion.length === 0
              ? ""
              : paidRegion.map((val, ind) => (
                  <PaidRegionCard key={ind} name={val} ind={ind} />
                ))}
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default AditionalRegionCard;
