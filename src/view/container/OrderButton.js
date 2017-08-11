import { OnClick } from 'ratatosk-event-handlers/events'
import { handleEvents } from 'ratatosk-redux'
import { connect } from 'react-redux'
import { OrderButton as OrderButtonPresentation } from 'view/presentation/OrderButton'

export const OrderButton = connect(
  () => ({}),
  handleEvents({
    onClick: OnClick('BUTTON')
  })
)(OrderButtonPresentation)
