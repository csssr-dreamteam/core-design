import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import styles from './Addresses.styles'
import { ThemeProps } from '../../../../themes/types'
import { AddressesProps } from '../../types'

import Heading from '../../../Heading'
import Text from '../../../Text'
import Link from '../../../Link'
import ClickOutside from '../../../ClickOutside'

export interface Props {
  className?: string
  isMobile: boolean
  isIe11: boolean
  addresses: AddressesProps[]
  setHoveredAddress: (address: string) => void
  theme?: ThemeProps
}

const Addresses: React.FC<Props> = ({
  className,
  isMobile,
  isIe11,
  addresses,
  setHoveredAddress,
}) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date())
    }, 1000)

    return () => clearTimeout(timeout)
  })

  const handleResetHoveredAddress = () => setHoveredAddress(null)

  const handleMouseOver = (address: string) => (event: any) => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    setHoveredAddress(address)
  }

  const handleMouseOut = (event: any) => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    setHoveredAddress(null)
  }

  const textSize = isMobile ? 'm' : 's'

  return (
    <ClickOutside onOutsideClick={handleResetHoveredAddress}>
      <div className={className}>
        {addresses.map(({ id, title, address, phone, status, timeZone }, index) => (
          <div
            className={`address-item address_${id}`}
            key={`${id}_${index}`}
            onMouseOver={handleMouseOver(id)}
            onMouseLeave={handleMouseOut}
          >
            <Heading
              as="p"
              className="title"
              type="regular"
              size="s"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <Text
              className="address"
              dangerouslySetInnerHTML={{ __html: address }}
              size={textSize}
              type="regular"
            />

            {phone && (
              <Link
                className="phone"
                dangerouslySetInnerHTML={{ __html: phone }}
                href={`tel:${phone}`}
                size={textSize}
                type="list"
              />
            )}

            {status && (
              <Text
                className="status"
                dangerouslySetInnerHTML={{ __html: status }}
                type="regular"
                size={textSize}
              />
            )}

            {!isIe11 && (
              <Text className="time" type="regular" size={textSize}>
                {time.toLocaleTimeString([], {
                  timeZone,
                  hour: '2-digit',
                  minute: '2-digit',
                })}{' '}
                {/* show only hours and minutes, use options with the default locale - use an empty array, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString */}
              </Text>
            )}
          </div>
        ))}
      </div>
    </ClickOutside>
  )
}

export default styled(Addresses)`
  ${styles}
`
