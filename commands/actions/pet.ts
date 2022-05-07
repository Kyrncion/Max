import { userMention } from "@discordjs/builders";
import { GuildMember, MessageEmbed, MessageMentions, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Actions",
  description: "Pets a friend!",

  permissions: ["SEND_MESSAGES"],

  callback: async ({ message, text }) => {
    const person = message.mentions.users.first();
    if (!message.mentions.users.first())
      return message.reply("You need to mention someone to pet them.");
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle("Who\'s A Good Boy?")
      .setDescription(`${message.author.username} pets ${person}!`)
      .setImage("https://c.tenor.com/KdY9pFb2oAwAAAAM/dog-petting.gif");
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
    