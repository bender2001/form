import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Components/Button.style";
import Form from "./Components/Form.style";
import "./App.css";
import InptLine from "./Components/InptLine.style";
import Toggle from "./Components/Toggle.style";

interface userDatabase {
  fullName: string;
  date: any;
  vaccinated: boolean;
}

function App() {
  const [appRenderStatus, setAppRender] = useState(true);
  const [toggleStatus, setToggle] = useState(false);
  const [fullName, setfullName] = useState("");
  const [date, setNewDate] = useState("");
  const [database, setDatabase] = useState([]);

  const onClose = () => {
    setAppRender(!appRenderStatus);
  };

  const onUpdateFullName = (newName: string) => {
    setfullName(newName);
  };

  const onUpdateDate = (newDate: any) => {
    setNewDate(newDate);
  };

  const onAdd = () => {
    if (fullName !== "" && date !== "") {
      const data: userDatabase = {
        fullName: fullName,
        date: date,
        vaccinated: toggleStatus,
      };
      const newDatabase: any = database;
      newDatabase.push(data);
      setDatabase(newDatabase);
      console.log(database);
    }
    onClose();
  };

  const Application = (
    <div className="App">
      <Form
        nameTag="my first form"
        closeButton={true}
        appRenderStatus={appRenderStatus}
        setAppRender={setAppRender}
        onClose={onClose}
      >
        <InptLine
          textTagName="full name:"
          inputType="clasic"
          onUpdate={onUpdateFullName}
        ></InptLine>
        <InptLine
          textTagName="birth date:"
          inputType="date"
          onUpdate={onUpdateDate}
        ></InptLine>
        <div className="toggle-container">
          <p>vaccinated?</p>
          <Toggle toggleStatus={toggleStatus} setToggle={setToggle}></Toggle>
        </div>
        <div className="button-container">
          <Button
            color="white"
            backgroundColor="black"
            outline={true}
            outlineColor="black"
            shadow={false}
            width="10rem"
            eventHandler={onAdd}
          >
            save
          </Button>
          <Button
            color="white"
            backgroundColor="black"
            outline={true}
            outlineColor="black"
            shadow={false}
            width="10rem"
            eventHandler={onClose}
          >
            x
          </Button>
        </div>
      </Form>
    </div>
  );

  return appRenderStatus ? Application : <React.Fragment></React.Fragment>;
}

export default App;
