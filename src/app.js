import { sideEffects } from 'side-effects'
import { configureView } from 'config/view'
import { configureSideEffects } from 'config/side-effects'
import { configureStore } from 'config/store'

const saga = configureSideEffects()
const store = configureStore(saga)
configureView(saga, store)
saga.run(sideEffects)
