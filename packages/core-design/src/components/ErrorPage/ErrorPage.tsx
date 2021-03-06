import React from 'react'
import styled from '@emotion/styled'
import Grid from '../Grid'
import { ErrorPageProps as Props } from './types'

import styles from './ErrorPage.styles'

/* tslint:disable */
const LogoIcon = require('../../static/icons/csssr_logo.svg')
const ServerError = require('../../static/icons/serverError.svg')
/* tslint:enable */

const ErrorPage: React.FC<Props> = ({ className, title, subTitle, Img }) => {
  return (
    <div className={className}>
      <Grid className="header">
        <a className="logo">
          <LogoIcon width="100%" height="100%" />
        </a>
      </Grid>

      <Grid className="error-code_500">
        <h1 className="font_h1-slab title" dangerouslySetInnerHTML={{ __html: title }} />

        {Img && <Img className="picture" />}

        <div className="code-wrapper">
          <ServerError width="100%" height="100%" />
        </div>

        <h2 className="font_subhead-slab subtitle" dangerouslySetInnerHTML={{ __html: subTitle }} />
      </Grid>
    </div>
  )
}

export default styled(ErrorPage)`
  ${styles}
`
