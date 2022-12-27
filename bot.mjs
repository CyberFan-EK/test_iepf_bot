import TeleBot from "telebot";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("text", (msg) => msg.reply.text("Hello" + msg.text));

export default bot;
