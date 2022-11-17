import { configureStore } from '@reduxjs/toolkit'
import addTodoreducer from './components/Redux/todoSlice'

export default configureStore({
    reducer: {
        list: addTodoreducer
    }
})