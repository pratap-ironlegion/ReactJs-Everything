import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './rightContent'

const PageContent = () => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default PageContent
