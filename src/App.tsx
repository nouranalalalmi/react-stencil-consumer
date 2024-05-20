import "./App.css";
import {
  CheckoutComponent,
  defineCustomElements,
} from "@nouranalalalmi/react-library";

defineCustomElements();

function App() {
  return (
    <CheckoutComponent storeName="Nouran's React Store" logoUrl="vite.svg" />
  );
}

export default App;
