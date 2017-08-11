import { routes, screens } from 'config/routes'
import { routing } from 'ratatosk-router/side-effects/routing'
import { fork } from 'redux-saga/effects'
import { sideEffects } from 'side-effects'
import { bootstrap } from 'side-effects/bootstrap'
import { businessLogic } from 'side-effects/business-logic'
const { expect, test } = global

test('side-effects', () => {
  const generator = sideEffects()

  const yield1 = generator.next()
  const expected1 = [
    fork(bootstrap),
    fork(businessLogic),
    fork(routing, routes, screens)
  ]

  expect(yield1.value).toEqual(expected1)
  expect(yield1.done).toBe(false)

  const yield2 = generator.next()
  const expected2 = void 0

  expect(yield2.value).toEqual(expected2)
  expect(yield2.done).toBe(true)
})
