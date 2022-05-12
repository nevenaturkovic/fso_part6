import React, { useEffect } from "react"
import ConnectedFilter from "./components/Filter"
import ConnectedNotification from "./components/Notification"
import AnecdoteList from "./components/AnecdoteList"
import ConnectedAnecdoteForm from "./components/AnecdoteForm"
import anecdoteService from "./services/anecdotes"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <ConnectedFilter />
      <ConnectedNotification />
      <AnecdoteList />
      <ConnectedAnecdoteForm />
    </div>
  )
}

export default App
