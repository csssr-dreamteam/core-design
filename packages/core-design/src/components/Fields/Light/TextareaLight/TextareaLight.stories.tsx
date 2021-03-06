import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import { withValueState, withFocusedState, withHoveredState } from '../../../../hocs'

import { TextareaLight } from './TextareaLight'

const ControlledTextareaLight = withValueState()(
  withFocusedState()(withHoveredState()(TextareaLight)),
)

storiesOf('TextareaLight', module)
  .addDecorator(withKnobs)

  .add('Controlled', () => {
    const actions = {
      onClick: action('onClick'),
      onBlur: action('onBlur'),
      onFocus: action('onFocus'),
      onChange: action('onChange'),
    }

    return (
      <ControlledTextareaLight value="Hello world" placeholder={'Type something...'} {...actions} />
    )
  })
  .add('Uncontrolled', () => {
    const knobs = {
      placeholder: text('placeholder', ''),
      error: text('error', 'Something went wrong'),
      hovered: boolean('hovered', false),
      focused: boolean('focused', false),
      value: text('value', 'Awesome text'),
    }

    return <TextareaLight {...knobs} />
  })
