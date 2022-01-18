import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, setTodoStatus, updateTodo } from "../redux/todoSlice";
import { useForm, SubmitHandler } from 'react-hook-form'
import { format, formatRelative } from 'date-fns';

interface IProps {
  title: string,
  description?: string,
  completed: boolean,
  dueDate: Date,
  id: string
}

interface IInputs {
  title: string,
  description?: string,
  dueDate?: Date
}

const TodoItem = ({ title, description, id, completed, dueDate }: IProps): JSX.Element => {
  const [currentTodo, setCurrentTodo] = useState<IProps>({} as IProps)
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm<IInputs>();
  const onSubmit: SubmitHandler<IInputs> = data => {
    dispatch(updateTodo(currentTodo));
    setIsEditing(false);
  };

  const deleteTodo = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
    dispatch(removeTodo(id))
  }

  const editTodo = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
    setIsEditing(true);
    setCurrentTodo({ title, description, dueDate, id, completed })
  }

  const toggleDone = () => {
    if (isEditing) {
      return;
    }
    dispatch(setTodoStatus({ completed: !completed, id }))
  }

  const dueInXDays = () => {
    console.log(typeof dueDate);

    return dueDate;
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
          <input
            type="date"
            {...register('dueDate')}
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
              <p>{dueInXDays()}</p>
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
