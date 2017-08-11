import { bootstrap } from 'side-effects/bootstrap'
const { expect, test } = global

test('bootstrap', () => {
  const generator = bootstrap()

  const yield1 = generator.next()
  const expected1 = []

  expect(yield1.value).toEqual(expected1)
  expect(yield1.done).toBe(false)

  const yield2 = generator.next()
  const expected2 = void 0

  expect(yield2.value).toEqual(expected2)
  expect(yield2.done).toBe(true)
})
