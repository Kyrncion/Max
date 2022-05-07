const { Client, Intents } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("messageCreate", (message) => {
  if (message.content === "max") {
    message.reply({
      content: "Bark!",
    });
  }
});

client.on("ready", () => {
  console.log("Alright, who woke Max up?");
});

client.login(process.env.TOKEN);
