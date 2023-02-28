import SignIn from "./components/SignIn";
import Line from "./components/Line";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
    {user ? <Line /> : <SignIn />}
    </>
  );
}

export default App;
