import { Button, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Burger } from "../../burger/burger";
import "./checkout_summary.css";

export const CheckoutSummary = ({ burgerOption }: { burgerOption: any }) => {
  const navigation = useNavigate();
  return (
    <div className="checkoutSummaryOuterDiv">
      <h1>We hope it tastes well!</h1>
      <div className="checkoutSummary">
        <Burger burgerOption={burgerOption} />
      </div>pacing={5}
      >
        <Button
          onClick={() => navigation(-1)}
          style={{ textTransform: "uppercase" }}
          variant="contained"
          color="error"
        >
          Cancel
        </Button>
        <Button
          style={{ textTransform: "uppercase" }}
          variant="contained"
          color="success"
        >
          Continue
        </Button>
      </Stack>
    </div>
  );
};
