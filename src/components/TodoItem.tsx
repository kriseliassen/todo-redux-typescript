import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, setTodoStatus, updateTodo } from "../redux/todoSlice";
import { useForm, SubmitHandler } from 'react-hook-form'

interface Props {
  title: string,
  description?: string,
  completed: boolean
  id: string
}

interface Inputs {
  title: string,
  description?: string,
}

const TodoItem = ({ title, description, id, completed }: Props): JSX.Element => {



  const [currentTodo, setCurrentTodo] = useState<Props>({ title, description, id, completed })
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(updateTodo(currentTodo));
    setIsEditing(false);
  };

  const deleteTodo = (): void => {
    dispatch(removeTodo(id))
  }

  const editTodo = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
    setIsEditing(true);
    setCurrentTodo({ title, description, id, completed })
  }

  const toggleDone = () => {
    if (isEditing) {
      return;
    }
    dispatch(setTodoStatus({ completed: !completed, id }))
  }

  return (
    <div onClick={toggleDone}>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Title</label>
          <input
            type="text"
            defaultValue={currentTodo.title}
            {...register('title')}
            onChange={(e) => setCurrentTodo({ ...currentTodo, title: e.target.value })}
          />
          <label>Description</label>
          <input
            type="text"
            defaultValue={currentTodo.description}
            {...register('description')}
            onChange={(e) => setCurrentTodo({ ...currentTodo, description: e.target.value })}
          />
          <input type="submit" value="Update" />
          <input
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)} />
        </form>
      )
        : (
          <>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <button onClick={editTodo}>Edit</button>
            <button onClick={deleteTodo}>Remove</button>
          </>
        )
      }
    </div>
  )
}

export default TodoItem
