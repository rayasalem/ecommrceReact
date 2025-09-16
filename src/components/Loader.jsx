import { CircularProgress, Typography, Box } from "@mui/material";

const Loader = ({ text = "جارٍ التحميل..." }) => {
  return (
    <Box sx={{ textAlign: "center", marginTop: 5 }}>
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Loader;
