import React from 'react'
import ReactDOM from 'react-dom/client'
import { Padre } from './07-tarea-memo/Padre'
import './index.css'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterCustomHook } from './01-useState/CounterCustomHook'
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { SimpleFormCustomHook } from './02-useEffect/SimpleFormCustomHook'
// import { MultipleHooks } from './03-examples/MultipleHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayouEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp'
import { BrowserRouter } from "react-router-dom";

import { MainApp } from './09-useContext/MainApp'


ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
</BrowserRouter>
)
