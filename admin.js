var xmpp = require("simple-xmpp");

console.clear();

xmpp.on("online", function (data) {
  console.log("Connected with JID: " + data.jid.user);
  console.log("Yes, I'm connected!");
  send();
});

xmpp.on("chat", function (from, message) {
  console.log(`You have received this "${message}" from ${from}`);
});

xmpp.on("error", function (err) {
  console.error(err);
});

xmpp.connect({
  jid: "admin@localhost",
  password: "pass@123",
  host: "ubuntu-server",
  port: 5222,
});

function send() {
  setInterval(function () {
    xmpp.send("shubhs@localhost", `Hello, This is admin @${Date.now()}`);
  }, 5000);
}

xmpp.getRoster();
