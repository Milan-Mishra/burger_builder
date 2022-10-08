import { Backdrop, CircularProgress } from "@mui/material";

export const LoadingComponent = ({ IsActive }: { IsActive: boolean }) => (
  <Backdrop
    sx={{ color: "#fff", zIndex: 9999 }}
    open={IsActive}
    onClick={() => {}}
  >
    <CircularProgress size={90} thickness={5} color="success" />
  </Backdrop>
);
