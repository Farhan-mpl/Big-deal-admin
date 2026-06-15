require("dotenv").config();

const express = require("express");
const {
  Client,
  GatewayIntentBits
} = require("discord.js");

const app = express();

// Render Port Fix
app.get("/", (req, res) => {
  res.send("BIG DEAL ADMIN ONLINE");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Web Server Running On Port ${PORT}`);
});

// Discord Bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} Online`);
});

// Test Command
client.on("messageCreate", async message => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

client.login(process.env.TOKEN);
