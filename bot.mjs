import TeleBot from "telebot";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("text", (msg) =>
  msg.reply.text(
    "Привіт, зараз кафедральний чат бот знаходится на модернізації нашим науковим гуртком. Якщо хочете переглянути стару версію чат-бота кафедри ІЕПФ зв'яжіться з куратором!"
  )
);

export default bot;
