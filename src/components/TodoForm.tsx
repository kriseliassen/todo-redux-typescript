import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTodo } from "../redux/todoSlice";
import { useForm, SubmitHandler } from 'react-hook-form'

interface Inputs {
  title: string,
  description: string,
}

const TodoForm = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, reset, setFocus } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(addTodo(data.title, data.description));
    reset();
    setFocus('title');
  };

  return (
    <div className="w-full p-6 pt-4 mx-auto bg-slate-200 shadow-xl rounded-xl m-2">
      <h2 className="mb-2 mx-1 text-lg text-right md:text-left">Add todo item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row flex-wrap space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex-auto">
          <label className="sr-only">Title</label>
          <input
            className="w-full h-12 text-sm border-gray-100 rounded-lg focus:ring-slate-400/60 focus:border-slate-400/60"
            type="text"
            placeholder="What do you need to do?"
            {...register('title')}
            required />
        </div>
        <div className="flex-auto">
          <label className="sr-only">Description</label>
          <input
            className=" w-full h-12 text-sm border-gray-100 rounded-lg focus:ring-slate-400/60 focus:border-slate-400/60"
            type="text"
            placeholder="Add more details"
            {...register('description')} />
        </div>
        <input className="py-2 md:px-4 md:py-3 bg-slate-600 text-slate-100 rounded-lg hover:bg-slate-500 hover:cursor-pointer focus:outline-slate-400/60" type="submit" value="Add" />
      </form>
    </div>
  )
}

export default TodoForm
