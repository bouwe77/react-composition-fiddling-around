import { useState } from "react";
import "./styles.css";

function Box({ children, style }) {
  const combinedStyle = {
    border: "1px solid black",
    margin: "10px",
    marginLeft: 0,
    padding: "10px",
    width: "200px",
    ...style
  };

  return <div style={combinedStyle}>{children}</div>;
}

function ToolbarButton({ children }) {
  return (
    <button
      style={{ border: "1px solid lightgray", margin: "3px", width: "26px" }}
    >
      {children}
    </button>
  );
}

function Toolbar1() {
  return (
    <Box style={{ width: "130px" }}>
      <ToolbarButton>💹</ToolbarButton>
      <ToolbarButton>🔢</ToolbarButton>
      <ToolbarButton>🟤</ToolbarButton>
      <ToolbarButton>🔸</ToolbarButton>
    </Box>
  );
}

function Toolbar2() {
  return (
    <Box style={{ width: "290px" }}>
      <ToolbarButton>🔲</ToolbarButton>
      <ToolbarButton>🆖</ToolbarButton>
      <ToolbarButton>Ⓜ️</ToolbarButton>
      <ToolbarButton>❇️</ToolbarButton>
      <ToolbarButton>♨️</ToolbarButton>
      <ToolbarButton>💠</ToolbarButton>
      <ToolbarButton>〽️</ToolbarButton>
      <ToolbarButton>🈁</ToolbarButton>
      <ToolbarButton>🔵</ToolbarButton>
    </Box>
  );
}

function Toolbars({ children }) {
  return <div style={{ display: "flex" }}>{children}</div>;
}

function Thingy() {
  return (
    <Box style={{ border: "6px solid green", width: "442px", height: "250px" }}>
      This is my thingy
    </Box>
  );
}

function getRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

export default function App() {
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const [thingies, setThingies] = useState(0);

  function doSomething() {
    setThingies(getRandomNumber());
  }

  return (
    <div>
      <button onClick={() => setToolbarVisible((prev) => !prev)}>
        {toolbarVisible ? "hide" : "show"}
      </button>

      {toolbarVisible ? (
        <Toolbars>
          <Toolbar1 />
          <Toolbar2 />
        </Toolbars>
      ) : null}

      <Thingy number={thingies} />
    </div>
  );
}
