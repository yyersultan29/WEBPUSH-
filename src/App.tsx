
import { useEffect } from "react";
import { requestPermission, onMessageListener } from "./firebase";
import CustomLineChart from "./charts";

function App() {
  useEffect(() => {
    requestPermission(); 

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onMessageListener().then((payload:any) => {
      console.log("Message received in foreground:", payload);
      alert(payload?.notification?.title || "New notification");
    });
  }, []);

  return (
  <div style={{
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    padding:'5px'
  }}>
    <CustomLineChart />
  </div>
  );
}

export default App;
