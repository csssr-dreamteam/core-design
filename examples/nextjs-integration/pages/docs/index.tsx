import * as React from 'react'
import { css } from '@emotion/core'
import { Grid, Heading } from '@asmy/core-design'
import * as coreExports from '@asmy/core-design'
import { ProjectLayout } from '../../components/ProjectLayout'
import Link from 'next/link'

const coreComponents = Object.keys(coreExports).filter(coreExport => coreExport[0] === coreExport[0].toUpperCase())

const DocumentationPage = () => (
  <ProjectLayout>
    <Grid
      css={css`
        margin-top: 20px;
      `}
    >
      <Heading.H1
        fontStyle='font_h1_slab'
        css={css` grid-column: 1 / span 12;`}
      >
        Компоненты
      </Heading.H1>

      <ul>
      {coreComponents.map(componentName => 
        <li key={componentName}>
          <Link href={`/docs/${componentName.toLowerCase()}`}>
            <a>{componentName}</a>
          </Link>
        </li>
      )}
      </ul>
    </Grid>
  </ProjectLayout>
)

export default DocumentationPage