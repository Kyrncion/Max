import { Message } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "test",
  description: "test",

  callback: ({ message, channel }) => {
    message.reply("Enter your username:");

    const filter = (msg: Message) => {
      return msg.author.id === message.author.id;
    };

    const collector = channel.createMessageCollector({
      filter,
      max: 1,
      time: 1000 * 5,
    });

    collector.on("collect", (message) => {
      console.log(message.content);
    });

    collector.on("end", (collected) => {
      if (collected.size === 0) {
        message.reply("You did not provide your username.");
        return;
      }

      let text = "Collected:\n\n";

      collected.forEach((message) => {
        text += `${message.content}\n`;
      });

      message.reply(text);
    });
  },
} as ICommand;
