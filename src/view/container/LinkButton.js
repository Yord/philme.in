import { OnClick } from 'ratatosk-event-handlers/events'
import { handleEvents } from 'ratatosk-redux'
import { connect } from 'react-redux'
import LinkButtonPresentation from 'view/presentation/LinkButton'

export const LinkButton = connect(
  () => ({}),
  handleEvents({
    onClick: OnClick('BUTTON')
  })
)(LinkButtonPresentation)

export default LinkButton
