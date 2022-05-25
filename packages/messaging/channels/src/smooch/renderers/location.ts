import { LocationContent } from '@botpress/messaging-content'
import { LocationRenderer } from '../../base/renderers/location'
import { SmoochContext } from '../context'

export class SmoochLocationRenderer extends LocationRenderer {
  renderLocation(context: SmoochContext, payload: LocationContent) {
    context.messages.push({
      type: 'location',
      coordinates: {
        lat: payload.latitude,
        long: payload.longitude
      },
      location: {
        address: payload.address,
        name: payload.title
      }
    })
  }
}
