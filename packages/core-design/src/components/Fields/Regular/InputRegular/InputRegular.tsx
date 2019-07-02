import styled from '@emotion/styled'
import styles from './InputRegular.styles'

export interface Props {
  error?: boolean
  hovered?: boolean
  focused?: boolean
}

const InputRegular = styled.input<Props>`
  ${styles.base}
  ${styles.state.hovered}
  ${styles.state.focused}
  ${styles.state.error}
`

export { InputRegular }
export default InputRegular