import PlanCard from "./components/PlanCard";
import SummeryCard from "./components/SummeryCard.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AditionalRegionCard from "./components/AditionalRegionCard";

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "70px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Grid item xs={6} md={12}>
              <PlanCard />
            </Grid>
            <Grid item xs={6} md={12}>
              <AditionalRegionCard />
            </Grid>
          </Grid>

          <Grid item xs={6} md={4}>
            <SummeryCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
