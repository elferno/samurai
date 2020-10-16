import React from 'react'

import advBanner_0 from 'assets/images/advBanner_0.png'
import advBanner_1 from 'assets/images/advBanner_1.png'

const banners = [advBanner_0, advBanner_1]
const styles = [
  { display: 'block', height: '86px' },
  { display: 'block', height: '174px' }
]

const AdvBar = ({ id }) => {

  return (
    <a href='https://finiko.im/'>
      <img src={banners[id]} style={styles[id]} alt=''/>
    </a>
  )
}

export default AdvBar