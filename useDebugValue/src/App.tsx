import { useOnlineStatus } from "./components/useOnlineStatus";

const StatusBar = () => {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "online" : "Disconnected"}</h1>;
};

function App() {
  return <StatusBar />;
}

export default App;
