import { connect } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import {
  createNotification,
  clearNotification,
} from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = (props) => {
  const addAnec = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    props.createAnecdote(content)
    props.createNotification(`you created '${content}'`, 5000)
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

const mapDispatchToProps = { createAnecdote, createNotification }

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
