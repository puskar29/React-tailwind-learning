import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='h-[90vh] flex gap-10 items-center py-10 px-16'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
