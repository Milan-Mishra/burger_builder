import { BrowserRouter } from "react-router-dom";
import { Layout } from "./component/layout/layout";

const App = () => {
  const baseURL =
    process.env.NODE_ENV === "production" ? "/burger_builder" : "/";
  return (
    <BrowserRouter basename={baseURL}>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
