import { useDispatch } from "react-redux"
import { createAnec } from "../reducers/anecdoteReducer"
import {
  createNotification,
  clearNotification,
} from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnec = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnec(newAnecdote))
    dispatch(
      createNotification({
        message: `you created '${content}'`,
        kind: "info",
      })
    )
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
