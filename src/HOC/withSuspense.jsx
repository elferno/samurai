import React from 'react'
import Loading from 'components/Common/Loading/Loading'

const withSuspense = (Component) => {
  return (props) => (
    <React.Suspense fallback={<Loading/>}><Component {...props}/></React.Suspense>
  )
}

export default withSuspense