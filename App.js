import { Route, Routes } from "react-router-dom";
import "./App.css";
import Regist from "./regist/Regist";
import NotFound from "./not_found/NotFound";
import Main from "./main/Frame";
import LoginPage from "./login/LoginPage";
import PriceExperiencePage from "./PriceExperience/PriceExperiencePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/login" Component={LoginPage} exact={true} />
        <Route path="/regist" Component={Regist} exact={true} />
        <Route path="/*" Component={NotFound} />
      </Routes>

      {/* <div>
        <PriceExperiencePage />
      </div> */}
    </>
  );
}

export default App;
