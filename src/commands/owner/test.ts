import { ICommand } from 'wokcommands'

export default {
  category: 'Testing',
  description: "Replies with Bark!",

    slash: 'both',

  callback: ({}) => {
    return 'Bark!'
  },
} as ICommand
