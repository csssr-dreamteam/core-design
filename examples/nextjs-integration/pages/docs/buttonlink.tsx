import * as React from 'react'
import { css } from '@emotion/core'
import { ButtonLink, Grid, Text, Heading } from '@asmy/core-design'
import { ProjectLayout } from '../../components/ProjectLayout'
import { Table } from '../../components/Table'
import { Pre } from '../../components/Pre'
import Link from 'next/link'

const todayDate = new Date()
const currentDate = todayDate.getDate()
const currentMonth = todayDate.getMonth() + 1
const formateNumberToTwoDigets = number => number < 10 ? 0 + '' + number : number
const formatedTodayDate = `${formateNumberToTwoDigets(currentDate)}${formateNumberToTwoDigets(currentMonth)}`

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
        ButtonLink
      </Heading.H1>

      <ButtonLink
        href='https://yandex.ru/'
        css={css`grid-column: 1 / span 3;`}
        kind="primary"
        external
      >
        На Яндекс
      </ButtonLink>

      <ButtonLink
        href='https://www.google.ru/'
        css={css`grid-column: 4 / span 3;`}
        kind="secondary"
        external
      >
        На Google
      </ButtonLink>

      <ButtonLink
        href='https://www.yahoo.com/'
        css={css`grid-column: 7 / span 3;`}
        kind="primary"
        external
      >
        На Yahoo
      </ButtonLink>

      <ButtonLink
        href={`https://www.aviasales.ru/search/MOW${formatedTodayDate}BER1`}
        css={css`grid-column: 10 / span 3;`}
        kind="secondary"
        external
      >
        На Берлин  
      </ButtonLink>

      <Text
        fontStyle='font_p24_strong'
        css={css`
          margin-top: 20px;
          grid-column: 1 / span 12;
        `}
      >
        Компонент ссылки, который выглядит как существующий компонент <Link href="/docs/button"><a>кнопки</a></Link>. 
        Используется для переходов на други страницы.
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
            <td>href</td>
            <td>string</td>
            <td></td>
            <td>Путь на который должна вести ссылка</td>
          </tr>
          <tr>
            <td>kind</td>
            <td>primary | secondary</td>
            <td>primary</td>
            <td>Тема ссылки</td>
          </tr>
          <tr>
            <td>external</td>
            <td>true | false</td>
            <td>false</td>
            <td>Отвечает за то будет открываться ссылка в новом окне или в существующем</td>
          </tr>
      </Table>

      <Heading.H2
        fontStyle='font_h2_slab'
        css={css`
          margin-top: 40px;
          grid-column: 1 / span 12;
        `}
      >
        Хендлеры
      </Heading.H2>

      <Table>
          <tr>
            <th>Имя</th>
            <th>Аргументы</th>
            <th>Комментарий</th>
          </tr>
          <tr>
            <td>onClick</td>
            <td>event</td>
            <td>Функция, которая будет исполнятся при клике на ссылку</td>
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
          import { ButtonLink } from '@asmy/core-design'

          <ButtonLink
            href='https://www.google.com/'
            kind="secondary"
            external
          >
            Ссылка
          </ButtonLink>
        `}
        </code>
      </Pre>
    </Grid>
  </ProjectLayout>
)

export default DocumentationPage