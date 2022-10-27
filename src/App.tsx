import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useLongPress from "./Hooks/useLongPress";
import List from "./Components/List";
import Form from "./Form";
import { Sub } from "./interfaces/types";

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu moderador a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 5,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <>
      <List subs={subs} /> <Form />
    </>
  );
}

export default App;
