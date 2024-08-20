import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { SkeletonTheme } from "react-loading-skeleton";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <SkeletonTheme baseColor="#112131" highlightColor="#3294F8">
          <Router />
        </SkeletonTheme>
      </BrowserRouter>
    </ThemeProvider>
  );
}
