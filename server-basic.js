// common js or esm way of importing the modules
// const eventEmitter = require("events");
import eventEmitter from "events";

// initalise before using the imported modules
const myEvent = new eventEmitter();

// create event, subscribe
myEvent.on("eventName", () => {
  // your code

  console.log("The eventName is fired");
});
// emit event, fire event
myEvent.emit("eventName");
s;
