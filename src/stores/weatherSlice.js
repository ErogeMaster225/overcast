import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        description: 'desc',
        endDate: '2023-06-15',
        status: 'done',
    },
]

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        increment(state) {
            console.log(state)
            state.tasks[0].id++
        },
    },
})

export const { increment } = weatherSlice.actions
export default weatherSlice.reducer
