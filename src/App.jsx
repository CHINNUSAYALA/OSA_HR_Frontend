import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import "./App.css";
import styled from "styled-components";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (form) => {
    console.log("Form Submitted", form);
  }

  return (
    <Wrapper>
      <Box sx={{ margin: "auto" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="auth tabs"
        >
          <Tab label="Login Page" />
          <Tab label="Sign Up Page" />
        </Tabs>
      </Box>

      {/* Login Div */}
      <TabPanel value={value} index={0}>
        <div>
          <h2>Login Form</h2>
          <Login onSubmit={handleSubmit} />
        </div>
      </TabPanel>

      {/* Signup Div */}
      <TabPanel value={value} index={1}>
        <div>
          <h2>Signup Form</h2>
          <Signup onSubmit={handleSubmit} />
        </div>
      </TabPanel>
    </Wrapper>
  );
}

export default App;