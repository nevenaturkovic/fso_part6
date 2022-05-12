import { createSlice } from "@reduxjs/toolkit"

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ]

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnec(state, action) {
      const newAnec = action.payload
      state.push(newAnec)
      // return [...state, asObject(action.payload)]
    },
    increaseVotes(state, action) {
      const id = action.payload
      const anecToChange = state.find((n) => n.id === id)
      const changedAnec = {
        ...anecToChange,
        votes: anecToChange.votes + 1,
      }
      return state.map((anec) => (anec.id !== id ? anec : changedAnec))
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEW_ANEC":
//       return [...state, action.data]
//     case "VOTE":
//       const id = action.data.id
//       const anecToChange = state.find((n) => n.id === id)
//       const changedAnec = {
//         ...anecToChange,
//         votes: anecToChange.votes + 1,
//       }
//       return state.map((anec) => (anec.id !== id ? anec : changedAnec))
//     default:
//       return state
//   }
// }

// const generateId = () => Number((Math.random() * 1000000).toFixed(0))

// export const createAnec = (content) => {
//   return {
//     type: "NEW_ANEC",
//     data: {
//       content,
//       votes: 0,
//       id: generateId(),
//     },
//   }
// }

// export const increaseVotes = (id) => {
//   return {
//     type: "VOTE",
//     data: { id },
//   }
// }

export const { createAnec, increaseVotes, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions
export default anecdoteSlice.reducer
