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
const chatIdUsers = [];

bot.start((ctx) => {
  if (!chatIdUsers.includes(ctx.chat.id)) chatIdUsers.push(ctx.chat.id);
  const buttonsStart = {
    parse_mode: "HTML",
    ...Markup.inlineKeyboard([Markup.button.callback("Почати", "Почати")]),
  };
  ctx.reply(
    `Привіт, ${ctx.message.from.first_name}!👋 Я ФінТЕКашнік - чат-бот кафедри Інформаційної економіки, підприємництва та фінансів і я готовий поспілкуватися з тобою) Тисни "Почати" та починай спілкуватись`,
    buttonsStart
  );
});

export default bot;
