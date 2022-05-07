import { userMention } from "@discordjs/builders";
import { GuildMember, MessageEmbed, MessageMentions, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Actions",
  description: "Grabs a friend!",

  permissions: ["SEND_MESSAGES"],

  callback: async ({ message, text }) => {
    const person = message.mentions.users.first();
    if (!message.mentions.users.first())
      return message.reply("You need to mention someone to grab them.");
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle("Get Ready To Be Snatched!")
      .setDescription(`${message.author.username} grabs ${person}!`)
      .setImage("https://i.pinimg.com/originals/85/c1/10/85c1109375a4d2e0ff303dbb1a85462c.gif");
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
