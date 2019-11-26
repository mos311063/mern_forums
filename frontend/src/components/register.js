import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const Form = props => (
  <>
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">Register</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = "Email is Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (values.password === "") {
                errors.password = "Password is required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                props.onSubmit(values);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form className="container p-2" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="email"
                  />
                  <small className="form-text text-muted">
                    {errors.email && touched.email && errors.email}
                  </small>
                </div>

                <div class="form-group">
                  <label for="email">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="password"
                  />
                  <small className="form-text text-muted">
                    {errors.password && touched.password && errors.password}
                  </small>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </form>
            )}
          </Formik>
          <p className="lead mt-4">
            Have An Account? <Link to="/"> Home </Link>
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Form;
