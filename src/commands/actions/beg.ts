import { userMention } from "@discordjs/builders";
import { GuildMember, MessageEmbed, MessageMentions, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Actions",
  description: "Gets to a friend!",

  permissions: ["SEND_MESSAGES"],

  callback: async ({ message, text }) => {
    const person = message.mentions.users.first();
    if (!message.mentions.users.first())
      return message.reply("You need to mention someone to beg to them.");
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle("Pleasseee??")
      .setDescription(`${message.author.username} begs to ${person}!`)
      .setImage("https://c.tenor.com/PCC3xkC-3TkAAAAC/shiba-inu-cute.gif");
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
