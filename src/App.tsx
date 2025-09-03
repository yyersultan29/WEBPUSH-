// App.jsx
import { useEffect } from "react";
import { requestPermission, onMessageListener } from "./firebase";
import CustomLineChart from "./charts";

function App() {
  useEffect(() => {
    requestPermission(); // Запрос на разрешение и токен

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onMessageListener().then((payload:any) => {
      console.log("Message received in foreground:", payload);
      alert(payload?.notification?.title || "New notification");
    });
  }, []);

  return (
  <div>
    <h1>Firebase Push in Vite</h1>
    <CustomLineChart />
  </div>
  );
}

export default App;
