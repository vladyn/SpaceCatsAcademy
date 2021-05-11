import React from 'react'
import styled from '@emotion/styled'
import { widths, mq } from '../styles'

// import { widths, colors } from "../styles";
import PropTypes from 'prop-types'

/**
 * Two column layout on desktop
 */

const SplitSection = ({ children, iconLeft, iconRight }) => {
  const spaceOutVertical = iconLeft || iconRight ? '105px' : '0px'

  return (
    <ContentDiv
      iconLeft={iconLeft}
      iconRight={iconRight}
      marginTop={spaceOutVertical}
    >
      {children}
    </ContentDiv>
  )
}

export default SplitSection

const ContentDiv = styled.div(({ iconRight, iconLeft, marginTop }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  alignItems: 'center',
  alignSelf: 'center',
  [mq[0]]: {
    width: '90%'
  },
  [mq[1]]: {
    width: '55%'
  },
  [mq[2]]: {
    width: '90%'
  },
  div: {
    paddingTop: marginTop,
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '1',
    ':first-child': {
      backgroundImage: `url(${iconLeft})`,
      backgroundPosition: 'top left',
      backgroundRepeat: 'no-repeat',
      paddingRight: '1em'
    },
    ':last-child': {
      backgroundImage: `url(${iconRight})`,
      backgroundPosition: 'top left',
      backgroundRepeat: 'no-repeat',
      paddingLeft: '1em'
    }
  }
}))

SplitSection.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string
}
