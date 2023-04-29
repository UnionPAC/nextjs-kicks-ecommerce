import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../theme";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "../components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="app">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </div>
  );
}
