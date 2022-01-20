import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, setTodoStatus, updateTodo } from "../redux/todoSlice";
import { useForm, SubmitHandler } from 'react-hook-form'
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';

interface IProps {
  title: string,
  description?: string,
  completed: boolean,
  id: string
}

interface IInputs {
  title: string,
  description?: string,
}

const TodoItem = ({ title, description, id, completed }: IProps): JSX.Element => {
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
    setCurrentTodo({ title, description, id, completed })
  }

  const toggleDone = () => {
    if (isEditing) {
      return;
    }
    dispatch(setTodoStatus({ completed: !completed, id }))
  }

  return (
    <div className={`flex justify-between bg-slate-300 p-3 rounded-lg  ${completed ? 'order-1' : 'order-0'}`}>
      {isEditing ? (
        <div className="flex flex-col w-full relative">
          <h3 className="absolute right-0 -top-1">Edit item</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap gap-2 mt-2 md:space-x-0">
            <div className="Form__inputs flex  flex-col gap-2">
              <div className="Form__field flex flex-col">
                <label className="text-sm font-semibold">Title</label>
                <input
                  className="w-full h-10 text-sm border-gray-100 rounded-lg focus:ring-slate-400/60 focus:border-slate-400/60"
                  type="text"
                  defaultValue={currentTodo.title}
                  {...register('title')}
                  onChange={(e) => setCurrentTodo({ ...currentTodo, title: e.target.value })}
                />
              </div>
              <div className="Form__field flex flex-col">
                <label className="text-sm font-semibold">Description</label>
                <input
                  className="w-full h-10 text-sm border-gray-100 rounded-lg focus:ring-slate-400/60 focus:border-slate-400/60"
                  type="text"
                  defaultValue={currentTodo.description}
                  {...register('description')}
                  onChange={(e) => setCurrentTodo({ ...currentTodo, description: e.target.value })}
                />
              </div>

            </div>
            <div className="Form__btns flex justify-end space-x-2 my-2">
              <input
                type="button"
                value="Cancel"
                className="flex justify-center px-2 py-1 text-sm bg-red-400 rounded-lg hover:bg-red-400/60 hover:cursor-pointer focus:outline-slate-400/60"
                onClick={() => setIsEditing(false)} />
              <input type="submit" value="Update" className="flex justify-center px-2 py-1 text-sm bg-emerald-400 rounded-lg hover:bg-emerald-400/60 hover:cursor-pointer focus:outline-slate-400/60" />
            </div>
          </form>
        </div>
      )
        : (
          <>
            <div className="md:w-1/12 pr-2 text-lg flex">
              {!completed ? <BsCircle className="self-center" /> : <BsCheckCircle className="self-center" />}
            </div>
            <div onClick={toggleDone} className={`w-10/12 flex flex-col justify-center ${completed && 'line-through opacity-75'}`}>
              <h3 className="text-xl first-letter:capitalize ">{title}</h3>
              <p className="text-sm my-2 mr-2  first-letter:capitalize ">{description}</p>
            </div>
            <div className="md:w-1/12 flex flex-col space-y-2 justify-center">
              {!completed
                && <button
                  onClick={editTodo}
                  className="flex justify-center p-2 text-base bg-slate-600 text-slate-100 rounded-full hover:bg-slate-500 hover:cursor-pointer focus:outline-slate-400/60">
                  <FiEdit3 />
                </button>}
              <button
                onClick={deleteTodo}
                className="p-2 flex justify-center text-base bg-slate-600 text-slate-100 rounded-full hover:bg-slate-500 hover:cursor-pointer focus:outline-slate-400/60">
                <FiTrash />
              </button>
            </div>
          </>
        )
      }
    </div>
  )
}

export default TodoItem
