import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiFillCloseSquare } from "react-icons/ai";
import "./model.css";
import { DialogBox } from "../dialog/dialog";
import {
  defaultAlertTiming,
  dialogBox,
  message,
} from "../../constants/constants";

// reference https://stackoverflow.com/a/7224605/15350391
const capitalize = (s: string) => s && s[0] + s.slice(1);

export const ModelComponent = ({
  modelStatus,
  changeModelStatus,
  burgerOption,
  totalPrice,
  setAlertForConfirmation,
  changeOrderConfirmStatus,
  getDisplayAlert,
  isClearAllDisabled,
  successFn,
}: {
  modelStatus: boolean;
  changeModelStatus: Function;
  burgerOption: any;
  totalPrice: string;
  setAlertForConfirmation?: Function;
  changeOrderConfirmStatus: Function;
  getDisplayAlert: boolean;
  isClearAllDisabled: boolean;
  successFn: Function;
}) => {
  return (
    <div>
      <Modal
        open={modelStatus}
        onClose={() => changeModelStatus(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="mainModelBox">
          <div className="modelCloseTagMerger">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <strong>Your burger total summary!</strong>
            </Typography>
            <AiFillCloseSquare
              className="closeTag"
              onClick={() => changeModelStatus(false)}
            />
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A delicious burger with the following ingredients.
          </Typography>
          <div className="yourOrder">
            <p>Your order:</p>
            <ul>
              {Object.keys(burgerOption).map((singularData: any) => (
                <li key={singularData}>
                  {capitalize(singularData)}:{burgerOption[singularData]}
                </li>
              ))}
              <hr className="dottedLine" />
              <li>
                <strong>
                  Total price: <span>{totalPrice}</span>
                </strong>
              </li>
            </ul>
            {setAlertForConfirmation && (
              <DialogBox
                isAlert={false}
                isSuccess={true}
                setAlert={changeOrderConfirmStatus}
                getDisplayAlert={getDisplayAlert}
                timing={defaultAlertTiming}
                alertText={message.orderConfirm}
                isClearAllDisabled={isClearAllDisabled}
                name="confirm order"
                successFn={successFn}
                title={dialogBox.orderButton.title}
                body={`${dialogBox.orderButton.body} ${totalPrice}`}
                buttonColorType="success"
                IsForConfirmation={true}
                confirmationFunction={setAlertForConfirmation}
                successMessageButtonString={"Yes i want to purchase"}
                denyMessageButtonString={"No i want to add more ingredients"}
                changeModelStatus={changeModelStatus}
                totalPrice={totalPrice}
                burgerOption={burgerOption}
              />
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};
