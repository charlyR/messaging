import { CommonSender } from '../../base/senders/common'
import { SlackContext } from '../context'

export class SlackCommonSender extends CommonSender {
  async send(context: SlackContext) {
    await context.client.web.chat.postMessage({
      channel: context.foreignConversationId!,
      text: <any>undefined,
      ...context.message
    })
  }
}