import { userMention } from "@discordjs/builders";
import { GuildMember, MessageEmbed, MessageMentions, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Actions",
  description: "Boops a friend!",

  permissions: ["SEND_MESSAGES"],

  callback: async ({ message, text }) => {
    const person = message.mentions.users.first();
    if (!message.mentions.users.first())
      return message.reply("You need to mention someone to hug them.");
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle("⚠ Boop Inbound! ⚠")
      .setDescription(`${message.author.username} boops ${person}!`)
      .setImage("https://c.tenor.com/ZpJUZmopVG8AAAAd/boop.gif");
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
