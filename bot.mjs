import TeleBot from "telebot";
const { Telegraf, Markup, Extra, Stage, session } = require("telegraf");
const token = process.env.BOT_TOKEN;
const fs = require("fs");
const filePath = "messages/message.txt";
if (token === undefined) {
  throw new Error("BOT_TOKEN must be provided!");
}

// const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);
const bot = new Telegraf(token, { polling: true });

const startBot = require("./src/commands/start");
startBot(bot);
// bot.on("text", (msg) => msg.reply.text("Hello" + msg.text));

export default bot;
