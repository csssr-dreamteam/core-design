import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Button, Grid, Text, Heading } from '@csssr/core-design'
import { font_p24_strong } from '@csssr/core-design'
import { ProjectLayout } from '../../components/ProjectLayout'


const handleClick = () => alert('Ты кликнул кнопку')

const Table = styled.table`
  grid-column: 1 / span 12;
  border: 1px solid black;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    border: 1px solid black;
    text-align: left;
    vertical-align: top;
    ${font_p24_strong}
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    vertical-align: middle;
  }
`
const Pre = styled.pre`
  margin-top: 0;
  grid-column: 1 / span 12;
  background-color: #f2f2f2;
`

const DocumentationPage = () => (
  <ProjectLayout>
    <Grid
      css={css`
        margin-top: 20px;
      `}
    >
      <Heading.H1
        fontStyle='font_h1_slab'
        css={css`
          grid-column: 1 / span 12;
        `}
      >
        Кнопка
      </Heading.H1>

      <Button
        type="button"
        css={css`
          grid-column: 1 / span 3;
        `}
        kind="primary"
        onClick={handleClick}
      >
        Кнопка
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 4 / span 3;
        `}
        kind="primary"
        onClick={handleClick}
        disabled
      >
        Кнопка
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 7 / span 3;
        `}
        kind="secondary"
        onClick={handleClick}
      >
        Кнопка
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 10 / span 3;
        `}
        kind="secondary"
        onClick={handleClick}
        disabled
      >
        Кнопка
      </Button>

      <Text
        fontStyle='font_p24_strong'
        css={css`
          margin-top: 20px;
          grid-column: 1 / span 12;
        `}
      >
        Компонент кнопки, используется как триггер для выполнения определённого действия. Кнопка однозначно сообщает пользователю, что произойдёт после нажатия на неё.
      </Text>

      <Heading.H2
        fontStyle='font_h2_slab'
        css={css`
          grid-column: 1 / span 12;
        `}
      >
        Свойства
      </Heading.H2>

      <Table 
        css={css`
          td:nth-child(2) {
            width: 200px;
          }

          td:nth-child(3) {
            width: 200px;
          }
        `}
      >
          <tr>
            <th>Имя</th>
            <th>Допустимые значения</th>
            <th>Значение по умолчанию</th>
            <th>Комментарий</th>
          </tr>
          <tr>
            <td>theme</td>
            <td>primary | secondary</td>
            <td>primary</td>
            <td>Тема кнопки</td>
          </tr>
          <tr>
            <td>children</td>
            <td>node | text</td>
            <td>Кнопка</td>
            <td>Контент кнопки, может содержать в себе текст или другие элементы</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
            <td>Отвечает за disabled состояние кнопки</td>
          </tr>
      </Table>

      <Heading
        as='h2'
        fontStyle='font_h2_slab'
        css={css`
          margin-top: 40px;
          grid-column: 1 / span 12;
        `}
      >
        Хендлеры
      </Heading>

      <Table>
          <tr>
            <th>Имя</th>
            <th>Аргументы</th>
            <th>Комментарий</th>
          </tr>
          <tr>
            <td>onClick</td>
            <td>event</td>
            <td>Функция, которая будет исполнятся при клике на кнопку</td>
          </tr>
      </Table>

      <Heading.H2
        fontStyle='font_h2_slab'
        css={css`
          margin-top: 40px;
          grid-column: 1 / span 12;
        `}
      >
        Код
      </Heading.H2>

      <Pre>
        <code>
        {`
          import { Button } from '@csssr/core-design'

          <Button
            type="button"
            css={css\`
              grid-column: 10 / span 3;
            \`}
            kind="secondary"
            onClick={handleClick}
            disabled
          >
            Кнопка
          </Button>
        `}
        </code>
      </Pre>
    </Grid>
  </ProjectLayout>
)

export default DocumentationPage