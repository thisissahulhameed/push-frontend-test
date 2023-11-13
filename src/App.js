import { registerSW, subscribe } from "./helper";

function App() {
  const registerAndSubscribeSM = async () => {
    try {
      const serviceWorkerRegistration = await registerSW();
      subscribe(serviceWorkerRegistration);
    } catch (err) {
      console.log(err, "error in sw while register and subscribe");
    }
  };
  return (
    <div>
      <h1>Push notification</h1>
      <button onClick={registerAndSubscribeSM}>Enable subscription</button>
    </div>
  );
}

export default App;
