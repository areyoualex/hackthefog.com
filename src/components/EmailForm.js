import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import jsCookie from 'js-cookie'
import styled from 'styled-components'
import { theme } from 'theme'
import Input from 'components/Input'
import Button from 'components/Button'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${theme.mediaQueries.md} {
    flex-direction: row;
  }
`

export default class EmailForm extends React.Component {
  state = {
    submitted: false,
  }

  render() {
    const { submitted } = this.state
    const emailSignup = jsCookie.get('emailSignup')

    return submitted ? (
      <p>
        Thanks! We’ll notify you when <strong>registration opens</strong>.{' '}
        <span role="img" aria-label="Blue heart emoji">
          💙
        </span>
      </p>
    ) : (
      !emailSignup && (
        <Formik
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .required('required')
              .email('must be a valid email'),
          })}
          validateOnChange={false}
          onSubmit={({ email }, { setSubmitting }) => {
            setSubmitting(true)
            axios
              .post('https://usebasin.com/f/c71a8c2b1707555', { email })
              .then(res => {
                setSubmitting(false)
                if (res.status === 200) {
                  this.setState({ submitted: true })
                  jsCookie.set('emailSignup', 'true')
                }
              })
          }}
        >
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Layout>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="alex@hackthefog.com"
                  error={errors.email}
                  value={values.email}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  Get notified
                </Button>
              </Layout>
            </form>
          )}
        </Formik>
      )
    )
  }
}
