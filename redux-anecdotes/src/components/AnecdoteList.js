import { useSelector, useDispatch } from "react-redux"
import { anecdoteVoteFor } from "../reducers/anecdoteReducer"
import {
  createNotification,
  clearNotification,
} from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const sortedAnecdotes = useSelector((state) =>
    [...state.anecdotes]
      .sort((first, second) => (first.votes > second.votes ? -1 : 1))
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      )
  )

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(anecdoteVoteFor(id))
    const anecdoteText = sortedAnecdotes.find(
      (anecdote) => anecdote.id === id
    ).content
    dispatch(createNotification(`you voted '${anecdoteText}'`, 5000))
  }

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
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
