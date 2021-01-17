import "./App.css";
import { AppHeader } from "./components/shared/app-header/AppHeader";
import { AppFooter } from "./components/shared/app-footer/AppFooter";
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
