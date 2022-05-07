import { GuildMember, MessageEmbed, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "testing",
  description: "send an embed",

  permissions: ["ADMINISTRATOR"],

  callback: async ({ message, text }) => {
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle("About My Developer")
      .setURL("https://www.linkedin.com/in/jacklevreau")
      .setAuthor(`Hey there, ${message.author.username}!`) 
      .setDescription(
        "My name is Jack Levreau. I'm a sixteen-year-old aspiring web developer from Fresno, California, attending Clovis High School and the Center for Advanced Research and Technology for Web Application Development and User Design Experience."
      )
      .setThumbnail(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
      )
      .addFields(
        {
          name: "About Max",
          value: "Placeholder Text",
        },
        {
          name: "My Passions",
          value:
            "Making other people's lives easier through technology is something I strive for on a daily basis. Through the development of websites, I strive to provide users with a pleasurable and intuitive experience. In addition, being a Full-Stack Developer has taught me the skillsets necessary to put these principles into reality, as well as enabling me to incorporate my overall affinity for website design and aesthetics. I believe that the efforts of developers like me can help make the web more accessible and better for everyone.",
        }
      )
      .setImage(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a2888477-59e9-4c12-aa2c-94e5b44efed5/dd54o7m-7b59090f-bf12-4cbf-9a37-989bcc423254.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyODg4NDc3LTU5ZTktNGMxMi1hYTJjLTk0ZTViNDRlZmVkNVwvZGQ1NG83bS03YjU5MDkwZi1iZjEyLTRjYmYtOWEzNy05ODliY2M0MjMyNTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CzgEHlaouduoOpUs5jDaCTxW29RSGEPY7oiPnywllXI"
      )
      .addFields(
        {
          name: "Here's Where You Can Find Me",
          value: "These are socials I'm most active on.",
        },
        { name: "Discord", value: "Placeholder Text", inline: true },
        { name: "Twitter", value: "Placeholder Text", inline: true },
        { name: "GitHub", value: "Placeholder Text", inline: true }
      )
      .setTimestamp()
      .setFooter({
        text: "Thank you for using Max, it means the world that users like you enjoy the products I make.",
      });
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
