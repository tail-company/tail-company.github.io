import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "white",
    },
  },
  typography: {
    fontFamily: ["Quattrocento", "serif"].join(","),
  },
});

export default theme;
