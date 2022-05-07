import { userMention } from "@discordjs/builders";
import { GuildMember, MessageEmbed, MessageMentions, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Actions",
  description: "Noms a friend!",

  permissions: ["SEND_MESSAGES"],

  callback: async ({ message, text }) => {
    const person = message.mentions.users.first();
    if (!message.mentions.users.first())
      return message.reply("You need to mention someone to nom them.");
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle("Nom Nom Nom!")
      .setDescription(`${message.author.username} noms on ${person}!`)
      .setImage("https://c.tenor.com/ZVyre2PZC4EAAAAd/dog-high-five.gif");
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
    