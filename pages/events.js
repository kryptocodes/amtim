import React from 'react'
import Events from '../components/events/Events'
import Wrapper from '../components/shared/Wrapper'

const news = () => {
  return (
   <Wrapper>
      <div className="mt-2">
      <h5 className="text-center text-uppercase">Events</h5>
      <Events/>
      </div>
   </Wrapper>
  )
}










export default news