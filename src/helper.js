import axios from "axios";


export async function registerSW() {
  if ("serviceWorker" in navigator) {
    let url = process.env.PUBLIC_URL + "/sw.js";
    const register = await navigator.serviceWorker.register(url, {
      scope: "/",
    });
    console.log("service worker is registered");
    return register;
  } else {
    throw new Error("service worker is not enabled");
  }
}

export async function subscribe(serviceWorkerReg) {
  let subscription = await serviceWorkerReg.pushManager.getSubscription();
  console.log({ subscription }, "subscribe");

  if (subscription === null) {
    subscription = await serviceWorkerReg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BC4i0hkffG8rIoJvfkEzioE5y9pnQbnNv3MiRp-QcdZY5a6PODoEAapOSM6v8VT0qKlB0sahDrdXEMdvR-LZbNE",
    });
  }

  axios.post("https://push-notfi-demo.onrender.com/subscribe", subscription);
}
