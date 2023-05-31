import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingSpinner = () => {
   return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
         <CircularProgress color="warning" size={100} />
      </Box>
   );
};