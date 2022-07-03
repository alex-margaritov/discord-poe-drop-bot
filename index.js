require("dotenv").config();

// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { DISCORD_TOKEN } = require("./src/env");
const { DROP_COMMAND } = require("./src/constants");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === DROP_COMMAND) {
    await interaction.reply("YOU GOT NOTHING! HAHAHA!");
  } else {
    await interaction.reply("Unknown command.");
  }
});

// Login to Discord with your client's token
client.login(DISCORD_TOKEN);
