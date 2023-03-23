import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';


const movieValidationSchema = yup.object({
  password: yup.string()
    .min(8, "make password must be strong")
    .required("Upper & Lower case needed"),
  email: yup.string()
    .min(10, 'example@email.com')
    .required()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
})
export function LoginForm() {

  const {handleBlur, handleSubmit, values, handleChange,touched,errors} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (values) => {
      console.log("form values:", values);
    }
  });
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login to Movie App</h2>
      <span>Wlecome</span>
      <TextField
        variant="outlined"
        id="outlined-basic"
        label='Username'
        value={values.email}
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email ? errors.email : null}
      <TextField
        variant="outlined"
        id="outlined-basic"
        label='Password'
        value={values.password}
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password ? errors.password : null}
      <Button variant="contained" type="submit">Login</Button>
    </form>
  );
}