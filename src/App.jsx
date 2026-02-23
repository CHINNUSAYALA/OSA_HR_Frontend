import { useMemo, useState } from "react";
import { Box, createTheme, Tab, Tabs, ThemeProvider } from "@mui/material";
import "./App.css";
import styled from "styled-components";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { CssBaseline } from "@mui/material";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ pt: 3, pb: 3 }}>{children}</Box>}
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
  };

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Box sx={{ margin: "auto" }}>
          <Tabs value={value} onChange={handleChange} aria-label="auth tabs">
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
    </ThemeProvider>
  );
}

export default App;
