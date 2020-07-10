import React, { useState } from 'react'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'
 
const MoveStuffAround = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
 
  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }
 
  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Ticker>
          {({ index }) => (
              <>
                  <h4 className="mt-3">This is the Headline of element #{index}!</h4>
                  <img src="www.my-image-source.com/" alt=""/>
              </>
          )}
        </Ticker>
      )}
    </PageVisibility>
  )
}
 
export default MoveStuffAround