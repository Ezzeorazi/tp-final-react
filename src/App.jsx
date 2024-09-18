import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import "./styles/global.css";
import "./styles/variables.css";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
