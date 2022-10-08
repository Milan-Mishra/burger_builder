const LoadingComponent = ({ IsActive }: { IsActive: boolean }) => (
  <Backdrop
    sx={{ color: "#fff", zIndex: 9999 }}
    open={IsActive}
    onClick={() => {}}
  >
    <CircularProgress size={90} thickness={5} color="success" />
  </Backdrop>
);

export { LoadingComponent };
