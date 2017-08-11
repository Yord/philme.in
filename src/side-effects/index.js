import { routes, screens } from 'config/routes'
import { routing } from 'ratatosk-router/side-effects/routing'
import { fork } from 'redux-saga/effects'
import { bootstrap } from 'side-effects/bootstrap'
import { businessLogic } from 'side-effects/business-logic'

export const sideEffects = function * () {
  yield [
    fork(bootstrap),
    fork(businessLogic),
    fork(routing, routes, screens)
  ]
}
