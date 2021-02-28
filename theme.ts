import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "white",
    },
  },
  typography: {
    fontFamily: ["Quattrocento", "Roboto"].join(","),
  },
});

export default theme;
