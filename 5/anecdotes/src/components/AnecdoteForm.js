import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const createAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(addAnecdote(newAnecdote))
        dispatch(notification('added  ${content}'))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={createAnecdote}>
                <input name="anecdote" />
                <button type="submit">add</button>
            </form>
        </div>
    )
}
export default AnecdoteForm