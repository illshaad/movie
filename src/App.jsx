import { useStore } from "zustand";

import Home from "./page/Home";
import Search from "./page/Search";

import Header from "./components/Home/Header";
import Information from "./components/Home/Information";

import nextStepStore from "./stores/header.store";
import searchStore from "./stores/search.store";

import "./styles/App.css";

function App() {
  const { step } = useStore(nextStepStore);
  const { setToFalse, setToTrue, isBooleanValue } = useStore(searchStore);

  const stepsComponents = [
    <Home key={0} />,
    <Search key={1} isBooleanValue={isBooleanValue} />,
  ];

  return (
    <div>
      <Header
        isBooleanValue={isBooleanValue}
        setToTrue={setToTrue}
        setToFalse={setToFalse}
      />
      <Information isBooleanValue={isBooleanValue} />
      {stepsComponents[step]}
    </div>
  );
}

export default App;
