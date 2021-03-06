import { userMention } from "@discordjs/builders";
import { GuildMember, MessageEmbed, MessageMentions, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Actions",
  description: "Hugs a friend!",

  permissions: ["SEND_MESSAGES"],

  callback: async ({ message, text }) => {
    const person = message.mentions.users.first();
    if (!message.mentions.users.first())
      return message.reply("You need to mention someone to hug them.");
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle("Bring It In!")
      .setDescription(`${message.author.username} hugs ${person}!`)
      .setImage("https://thumbs.gfycat.com/GrimSoupyBison-size_restricted.gif");
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
