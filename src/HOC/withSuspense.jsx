import React from 'react'
import {TransparentLoading} from 'components/Common/Loading/Loading'

const withSuspense = (Component) => {
  return (props) => (
    <React.Suspense fallback={<TransparentLoading/>}>
      <Component {...props}/>
    </React.Suspense>
  )
}

export default withSuspense