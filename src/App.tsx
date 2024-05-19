import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  CheckoutComponent,
  defineCustomElements,
} from "@nouranalalalmi/react-library";

defineCustomElements();

function App() {
  return <CheckoutComponent />;
}

export default App;
