import React from 'react'

import Loading from 'components/Common/Loading/Loading'
import NoContent from 'components/Common/NoContent/NoContent'

const PreloadContent = ({ isLoading, noContent, noContentFiller, children }) => {

  if (isLoading) {
    return <Loading />
  }

  if (noContent) {
    return <NoContent>{noContentFiller}</NoContent>
  }

  return children
}

export default PreloadContent