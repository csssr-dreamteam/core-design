import { css } from '@emotion/core'

import { Props } from './InputLight'

const base = css`
  appearance: none;
  background: none;
  border: none;
  border-bottom: 0.0625rem solid #e1e1e1;
  caret-color: #4a4a4a;
  color: rgb(74, 74, 74);

  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1rem;

  outline: none;

  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;

  text-align: center;

  &::placeholder {
    font-weight: 100;
    color: #c0c0c0;
  }
`

const isHovered = ({ hovered }: Pick<Props, 'hovered'>) =>
  hovered &&
  css`
    border-color: #9b9b9b;
  `

const isFocused = ({ focused }: Pick<Props, 'focused'>) =>
  focused &&
  css`
    border-color: #0076ff;
  `

const hasError = ({ error }: Pick<Props, 'error'>) =>
  error &&
  css`
    border-bottom-color: #d0021b;
    color: #d0021b;
  `

export { base, isHovered, isFocused, hasError }