import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { Properties } from "./containers/Properties";

function App() {
  return (
    <div>
      <AppHeader />
      <Properties />
      <AppFooter />
    </div>
  );
}

export default App;
