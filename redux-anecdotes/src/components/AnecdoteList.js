import { useSelector, useDispatch } from "react-redux"
import { increaseVotes } from "../reducers/anecdoteReducer"
import {
  createNotification,
  clearNotification,
} from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    [...(state.anecdotes)].sort((first, second) =>
    first.votes > second.votes ? -1 : 1
    )
  )

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(increaseVotes(id))
    const anecdoteText = anecdotes.find((anecdote) => anecdote.id === id).content
    dispatch(
      createNotification({
        message: `you voted '${anecdoteText}'`,
        kind: "info",
      })
    )
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
