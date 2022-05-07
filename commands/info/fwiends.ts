import { GuildMember, MessageEmbed, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "testing",
  description: "send an embed",

  permissions: ["ADMINISTRATOR"],

  callback: async ({ message, text }) => {
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle("Check Out My Friends!")
      .setDescription("They are incredbile people.")
      .addFields(
        {
          name: "Brock",
          value: "Brockolio#8276",
          inline: true,
        },
        {
          name: "Ash",
          value: "*dying crow noises*#1058",
          inline: true,
        },
        { name: "Lucy",
          value: "Lu_#2463",
          inline: true,
        },
        { name: "Alex",
          value: "doomblade101#6614",
          inline: true,
        },
        { name: "Kimberly",
          value: "Silrovine#2212",
          inline: true,
        },
        { name: "Bella",
          value: "✧*｡Wackus Bonkus✧*｡#3880",
          inline: true,
        },
      )
      .setFooter({
        text: "I thank each and every one of you, without you guys I wouldn't be where I am today.",
      });
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
