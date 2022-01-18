import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { Field, Formik, Form } from "formik";
import { addTodo } from "../redux/todoSlice";

interface FormValues {
  title: string,
  description: string
}

const TodoForm: React.FC = () => {
  const initialValues: FormValues = {title: '', description: ''};

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Add todo item</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormValues, actions) => {
          dispatch(addTodo(values.title, values.description))
          actions.setSubmitting(false);
        }}>
          <Form>
            <label htmlFor="title">Title</label>
            <Field 
              id="title" 
              name="title" 
              placeholder="Title" />
            <label htmlFor="description">Description</label>
            <Field 
              id="description" 
              name="description" 
              placeholder="Description" />
           <button type="submit">Add todo</button>
          </Form>
      </Formik>
    </div>
  )
}

export default TodoForm
