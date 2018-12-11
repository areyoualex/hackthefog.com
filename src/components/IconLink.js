import React from 'react'
import Icon from '@hackclub/icons'

import Link from './Link'

const IconLink = ({ href, icon }) => (
  <Link href={href} className="icon-link" style={{ color: '#f1f1f1' }}>
    <Icon glyph={icon} size={36} />
  </Link>
)
export default IconLink
