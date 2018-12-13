import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: auto;
  font-size: 1.4rem;
  padding: 10px 25px;
  background-color: #e46333;
  border: none;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 2px #202020aa);
  font-family: 'Inter UI';
  color: white;
`

class Button extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    if (this.props.href) window.location.href = this.props.href
    if (this.props.onClick) this.props.onClick()
  }
  render() {
    let type = this.props.type || 'button'
    return (
      <StyledButton onClick={this.onClick} type={type}>
        {this.props.children}
      </StyledButton>
    )
  }
}

export default Button
