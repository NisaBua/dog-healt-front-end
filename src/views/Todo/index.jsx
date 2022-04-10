import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
// import todoAction from '../../actions/Todo'
import todoAction from 'actions/Todo';

// Components
import Task from './Task'
import Post from './Post'

const TodoPage = () => {
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todo)
  const post = useSelector(state => state.post)

  const [newTask, setNewTask] = useState('')

  const handleForm = event => {
    event.preventDefault()
    dispatch(todoAction.SetNewTask(newTask))
    setNewTask('')
  }

  useEffect(() => {
    const loadTodoLists = () => {
      dispatch(todoAction.GetTaskLists())
      dispatch(todoAction.GetPostList())
    }
    loadTodoLists()
  }, [dispatch])

  return (
    <div>
     
    </div>
  )
}

export default TodoPage
