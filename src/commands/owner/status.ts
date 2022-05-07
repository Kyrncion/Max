import { ICommand } from "wokcommands";

export default {
  category: "Configuration",
  description: "Sets the bots status",

  minArgs: 1,
  expectedArgs: "<status>",

  slash: "both",

  ownerOnly: true,

  callback: ({ client, text }) => {
    client.user?.setPresence({
      status: 'idle',
      activities: [
        {
          name: text,
        },
      ],
    });

    return `**[SERVER]** Max\'s status has been updated.`;
  },
} as ICommand;
