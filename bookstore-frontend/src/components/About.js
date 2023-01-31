import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          Book Store
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Designed by Coker
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Contact: +233 596205824
        </Typography>
      </Box>
    </div>
  );
};

export default About;
