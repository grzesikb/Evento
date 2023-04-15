import { ThemeProvider } from "@emotion/react";
import { AppBar, Toolbar, createTheme, Typography } from "@mui/material";
import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "rgb(27, 18, 18)",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Typography variant="h6" color="inherit" component="div">
          EventsManagment
        </Typography>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "7vh",
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
