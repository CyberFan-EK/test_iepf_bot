import TeleBot from "telebot";
const { Telegraf } = require("telegraf");
const token = process.env.BOT_TOKEN;
const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);
bot.on("text", (msg) =>
  msg.reply.text(
    "Привіт, зараз наш чат бот знаходится на модернізації нашим науковим гуртком. Якщо хочете переглянути стару версію чат-бота кафедри ІЕПФ зв'яжіться з куратором!"
  )
);

// const bot = new Telegraf(token, { polling: true });

// const { Markup } = require("telegraf");
// const chatIdUsers = [];
// bot.start((ctx) => {
//   if (!chatIdUsers.includes(ctx.chat.id)) chatIdUsers.push(ctx.chat.id);
//   const buttonsStart = {
//     parse_mode: "HTML",
//     ...Markup.inlineKeyboard([Markup.button.callback("Почати", "Почати")]),
//   };
//   ctx.reply(
//     `Привіт, ${ctx.message.from.first_name}!👋 Я ФінТЕКашнік - чат-бот кафедри Інформаційної економіки, підприємництва та фінансів і я готовий поспілкуватися з тобою) Тисни "Почати" та починай спілкуватись`,
//     buttonsStart
//   );
// });

export default bot;
