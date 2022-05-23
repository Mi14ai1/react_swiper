import ReactDOM from "react-dom";
import { product } from "./moke";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import ProductPage from "./product-page/product-page";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ProductPage product={product} showInfoInAccordion />
  </ThemeProvider>,
  rootElement
);
