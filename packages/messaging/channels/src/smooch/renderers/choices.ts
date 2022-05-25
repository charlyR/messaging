import { ChoiceContent } from '@botpress/messaging-content'
import { ChoicesRenderer } from '../../base/renderers/choices'
import { SmoochContext } from '../context'

export class SmoochChoicesRenderer extends ChoicesRenderer {
  renderChoice(context: SmoochContext, payload: ChoiceContent): void {
    const message = context.messages[0]
    message.actions = payload.choices.map((r) => ({ type: 'reply', text: r.title, payload: r.value }))
  }
}
