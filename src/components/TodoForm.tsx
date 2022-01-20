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
    <div className="w-full p-6 pt-4 mx-auto bg-pink-400">
      <h2 className="mb-2 px-1 text-lg text-right md:text-left font-titan">Add to-do item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row flex-wrap gap-0 border-2 border-black">
        <div className="flex-auto">
          <label className="sr-only">Title</label>
          <input
            className="w-full h-12 text-sm border-b-2 border-b-black md:border-b md:border-r-2 md:border-r-black focus:ring-black focus:border-black focus:bg-pink-200"
            type="text"
            placeholder="What do you need to do?"
            {...register('title')}
            required />
        </div>
        <div className="flex-auto">
          <label className="sr-only">Description</label>
          <input
            className=" w-full h-12 text-sm border-b-2 border-b-black md:border-b md:border-r-2 md:border-r-black focus:ring-black focus:border-black focus:bg-pink-200"
            type="text"
            placeholder="Add more details"
            {...register('description')} />
        </div>
        <input className="h-12 md:w-14 bg-yellow-300
         hover:bg-yellow-300/60 hover:cursor-pointer focus:outline-yellow-300/60" type="submit" value="Add" />
      </form>
    </div>
  )
}

export default TodoForm
