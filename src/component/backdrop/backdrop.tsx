import "./backdrop.css";

export const BackdropComponent = ({
  show,
  toggleFunction,
}: {
  show: boolean;
  toggleFunction: Function;
}) =>
  show ? (
    <div className="backdrop" onClick={() => toggleFunction(false)}></div>
  ) : null;
