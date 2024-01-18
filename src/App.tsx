import "./App.css";
import { CodeContextProvider } from "./providers/CodeProvider";
import { EditingProvider } from "./providers/EditStatusProvider";
import Main from "./components/pages/Main";

function App() {
  return (
    <CodeContextProvider>
      <EditingProvider>
        <Main />
      </EditingProvider>
    </CodeContextProvider>
  );
}

export default App;
