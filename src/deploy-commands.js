require("dotenv").config();

const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { APP_ID, GUILD_ID, DISCORD_TOKEN } = require("./env");
const { DROP_COMMAND } = require("./constants");

const commands = [
  new SlashCommandBuilder()
    .setName(DROP_COMMAND)
    .setDescription("Replies with drop result"),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);

rest
  .put(Routes.applicationGuildCommands(APP_ID, GUILD_ID), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
