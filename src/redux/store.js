import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

// 生成store对象
export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)