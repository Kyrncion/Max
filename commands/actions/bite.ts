import { userMention } from "@discordjs/builders";
import { GuildMember, MessageEmbed, MessageMentions, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Actions",
  description: "Bit a friend!",

  permissions: ["SEND_MESSAGES"],

  callback: async ({ message, text }) => {
    const person = message.mentions.users.first();
    if (!message.mentions.users.first())
      return message.reply("You need to mention someone to bite them.");
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle("Grrrr!")
      .setDescription(`${message.author.username} bites ${person}!`)
      .setImage("https://c.tenor.com/ze9WKOkD0YMAAAAM/dog-cute.gif");
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
