import { useState } from "react";
import { Chart } from "./Chart";
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

function ToolbarButton({ children, ...rest }) {
  return (
    <button
      {...rest}
      style={{ border: "1px solid lightgray", margin: "3px", width: "26px" }}
    >
      {children}
    </button>
  );
}

function Toolbar1({ applyTools }) {
  return (
    <Box style={{ width: "130px", border: "1px solid lightgray" }}>
      <ToolbarButton onClick={applyTools}>💹</ToolbarButton>
      <ToolbarButton onClick={applyTools}>🔢</ToolbarButton>
      <ToolbarButton onClick={applyTools}>🟤</ToolbarButton>
      <ToolbarButton onClick={applyTools}>🔸</ToolbarButton>
    </Box>
  );
}

function Toolbar2({ applyTools }) {
  return (
    <Box style={{ width: "290px", border: "1px solid lightgray" }}>
      <ToolbarButton onClick={applyTools}>🔲</ToolbarButton>
      <ToolbarButton onClick={applyTools}>🆖</ToolbarButton>
      <ToolbarButton onClick={applyTools}>Ⓜ️</ToolbarButton>
      <ToolbarButton onClick={applyTools}>❇️</ToolbarButton>
      <ToolbarButton onClick={applyTools}>♨️</ToolbarButton>
      <ToolbarButton onClick={applyTools}>💠</ToolbarButton>
      <ToolbarButton onClick={applyTools}>〽️</ToolbarButton>
      <ToolbarButton onClick={applyTools}>🈁</ToolbarButton>
      <ToolbarButton onClick={applyTools}>🔵</ToolbarButton>
    </Box>
  );
}

function Toolbars({ children }) {
  return <div style={{ display: "flex" }}>{children}</div>;
}

function Thingy({ number }) {
  return (
    <Box
      style={{ border: "6px solid lightgray", width: "442px", height: "250px" }}
    ></Box>
  );
}

function getRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

export default function App() {
  return <Dashboard />;
}

function Dashboard() {
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const [data, setData] = useState(() => getRandomNumber());

  function applyTools() {
    setData(getRandomNumber());
  }

  return (
    <div>
      <button onClick={() => setToolbarVisible((prev) => !prev)}>
        {toolbarVisible ? "hide" : "show"}
      </button>

      {toolbarVisible ? (
        <Toolbars>
          <Toolbar1 applyTools={applyTools} />
          <Toolbar2 applyTools={applyTools} />
        </Toolbars>
      ) : null}

      <Chart input={data} />
    </div>
  );
}
