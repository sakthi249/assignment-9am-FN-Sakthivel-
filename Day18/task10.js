const defaultSettings = {
  theme: "light",
  notification: true,
  fontSize: 14,
};
console.log("Default Settings:", defaultSettings);
let userSettings = {
  theme: "light",
  notification: true,
  fontSize: 14,
};
userSettings.theme = "dark";
userSettings.notification = false;
userSettings.fontSize = 18;
console.log("User Settings After Changes:", userSettings);