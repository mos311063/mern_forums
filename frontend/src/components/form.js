import React from 'react'
import { Formik } from 'formik'

const Form = props => (
  <>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {}
        if (!values.email) {
          errors.email = 'Email is Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        if (values.password === '') {
          errors.password = 'Password is required'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false)
          props.onSubmit(values)
        }, 400)
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
        <form className="form-row ml-2" onSubmit={handleSubmit}>
          <div className="col">
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="email"
            />
            <div style={{ position: 'absolute', bottom: -38 }}>
              <small className="form-text text-muted">
                {errors.email && touched.email && errors.email}
              </small>
            </div>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="password"
            />
            <div style={{ position: 'absolute', bottom: -38 }}>
              <small className="form-text text-muted">
                {errors.password && touched.password && errors.password}
              </small>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            Login
          </button>
        </form>
      )}
    </Formik>
  </>
)

export default Form
