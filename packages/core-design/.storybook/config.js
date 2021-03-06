import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import Fonts from '../src/components/Fonts'
import { Root } from '../src/components/Root'
import { Global } from '@emotion/react'
import styles from './styles/global'

const req = require.context('../src/components', true, /\.stories\.tsx?$/)

const GlobalStyles = ({ children }) =>
  <Root>
    {children}

    <Fonts preset="com"/>
    <Global styles={styles} />
  </Root>


addDecorator(storyFn => <GlobalStyles>{storyFn()}</GlobalStyles>)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
