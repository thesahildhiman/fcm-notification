import { getToken } from "firebase/messaging";
import "./App.css";
import { messaging } from "./config/firebase";

function App() {
  const handleNotification = async () => {
    console.log("--clicked--");
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BJlmYAfHFcbhxS6W8GdvnztV3Rcqhm4bCs7L5xcFZAd5XOFAGcEuT5_gBltPQI2auaiMANvlSy4sXp5YzQCsGyM",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
    // const permission = await Notification.requestPermission();
    // if (permission === "granted") {
    //   const token = await getToken(messaging, {
    //     vapidKey: `BJlmYAfHFcbhxS6W8GdvnztV3Rcqhm4bCs7L5xcFZAd5XOFAGcEuT5_gBltPQI2auaiMANvlSy4sXp5YzQCsGyM`,
    //   });
    //   console.log("token------", token);
    // } else {
    //   console.log("permission denied");
    // }
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleNotification}>notify</button>
      </header>
    </div>
  );
}

export default App;
