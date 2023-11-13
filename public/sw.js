self.addEventListener("install", (e) => {
  console.log("service worker installed");
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated");
});

self.addEventListener("push", async (e) => {
  const msg = await e.data.json();
  let { title, description, image } = msg;
  console.log(title, description, image, "title message");
  console.log("data received");

  await e.waitUntil(
    self.registration.showNotification(title, {
      body: description,
      icon: image,
    })
  );
});
