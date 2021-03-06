import { always, propEq } from 'ramda'
import { onClick, onUrlChange } from 'ratatosk-event-handlers/events'

const onButtonClick = onClick('BUTTON')

export const orderTagsDescByOccurrenceOnButtonClick = onButtonClick(
  propEq('action', 'order-tags-desc-by-occurrence')
)

export const orderTagsAlphabeticallyOnButtonClick = onButtonClick(
  propEq('action', 'order-tags-alphabetically')
)

export const googleAnalyticsOnUrlChange = onUrlChange(
  always(true)
)
