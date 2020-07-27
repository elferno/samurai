import React from 'react'
import g_css from 'App.module.css'
import l_css from './ProfileInfo.module.css'

const ProfileInfo = () => {
  const css = {...g_css, ...l_css}

  return (
    <React.Fragment>
      {/* BANNER */}
      <div className={`${css.banner} ${css.block}`} style={{backgroundImage: "URL('https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Central_ID_River.jpg?crop=196,0,2607,1434&wid=4000&hei=2200&scl=0.6518181818181819')"}}/>

      {/* INFO-BLOCK */}
      <div className={`${css.intro} ${css.block}`}>

        {/* AVATAR */}
        <div className={css.avatar}>
          <img alt='' src='https://cdn130.picsart.com/316823172046201.jpg?type=webp&to=min&r=640'/>
        </div>

        {/* NAME + INFO */}
        <div className={css.info}>
          <h1 className={css.ff_header}>Elijah I.</h1>

          <div>
            <p>Date of birth: 17.09.1986</p>
            <p>City: Moscow</p>
            <p>Education: none</p>
            <p>Web-site: https://rlimb.com</p>
          </div>
        </div>

        {/* STATISTICS */}
        <div className={css.stats}>
          <div style={{width: '100%', height: '100%'}} className={`${css.cc_inline}`}>статистика</div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default ProfileInfo