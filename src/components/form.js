import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

export const StyledForm = styled.form``

export const StyledFormField = styled.form`
  display: flex;
  flex-flow: column;
  margin: 20px 0;
  label {
    margin-bottom: 5px;
  }
`

export const FormField = ({ label, children, id }) => {
  return (
    <StyledFormField className="form-field">
      <label htmlFor={id}>{label}</label>
      {children}
    </StyledFormField>
  )
}

export const TextFormField = ({ label, id, ...restInput }) => {
  return (
    <FormField id={id} label={label}>
      <input type="text" default="" id={id} {...restInput} />
    </FormField>
  )
}

TextFormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
