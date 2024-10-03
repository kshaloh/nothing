const app = {
  init: () => {
    console.log("app running");
  },
  three: "change from local",
};

setTimeout(app.init, 1000);
