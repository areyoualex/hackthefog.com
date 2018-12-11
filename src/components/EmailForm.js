import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Form = styled.form`
  margin: 2rem auto;
  max-width: 85vw;
  background-color: #aadef4;
  color: #0c1b29;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
const Label = styled.label`
  display: block;
  padding-bottom: 0.5rem;
  font-family: 'Inter UI';
  font-weight: bold;
  font-size: 1rem;
  width: fit-content;
`
const Input = styled.input`
  margin: 0 auto 1rem;
  width: 98%;
  border-radius: 2px;
  border: 1px solid #c4c4c4;
  filter: drop-shadow(1px 1px 2px #202020aa);
  padding: 5px;
  font-size: 1rem;
`

const EmailForm = () => (
  <Form>
    <Label>EMAIL</Label>
    <Input type="text" />
    <Button type="submit" style={{ margin: '1rem auto' }}>
      I’D LOVE TO HAVE FUN AND MAKE HISTORY
    </Button>
  </Form>
)

export default EmailForm
