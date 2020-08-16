import React from 'react'

import Loading, { LoadingIcon } from 'components/Common/Loading/Loading'
import NoContent from 'components/Common/NoContent/NoContent'

const PreloadContent = ({ isLoading, noContent, noContentFiller, clearContent = false, children }) => {

  if (isLoading) {
    return clearContent
      ? <LoadingIcon />
      : <Loading />
  }

  if (noContent) {
    return clearContent
      ? noContentFiller
      : <NoContent>{noContentFiller}</NoContent>
  }

  return children
}

export default PreloadContent