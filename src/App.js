import "./App.css";
import LoginForm from "./components/loginComponents/loginForm";
import { LoginScreen } from "./components/loginComponents/loginScreen";

function App() {
  return (
    <div className="App">
      <LoginScreen>
        <h1>I can do it</h1>
        <LoginForm />
      </LoginScreen>
    </div>
  );
}

export default App;
