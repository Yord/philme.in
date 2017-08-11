import { compose } from 'ramda'
import { lensPropOr } from 'ratatosk-ramda'
import { appTagOrder } from 'store/app/selectors'

export const tagOrderOrder = compose(
  appTagOrder,
  lensPropOr(
    'by occurrence',
    'order'
  )
)
