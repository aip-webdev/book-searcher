import { createTheme } from "@mui/material/styles";
import colors from "../utils/colors";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.gray,
        }
      }
    }
  }
});

export default theme;