import React from 'react'
import { ClutchReviewsData, StarProps } from './types'

export function SmallLogoBadge({ classNamePrefix, reviewsCount, starsCount }: ClutchReviewsData) {
  const starsMarkup = Array.from({ length: 5 }, (_, idx) => {
    return <Star key={idx} colored={idx + 1 <= Math.round(starsCount)} />
  })

  return (
    <div
      className={classNamePrefix + '-container'}
      style={{
        display: 'flex',
        padding: '15px',
        alignItems: 'center',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" viewBox="0 0 28 32" preserveAspectRatio="none">
        <g opacity="1" fill="currentColor">
          <path
            d="M21.75 22.306c-1.652 1.46-3.789 2.252-5.993 2.222-5.08 0-8.811-3.73-8.811-8.85 0-5.12 3.612-8.693 8.81-8.693 2.21-.03 4.355.747 6.034 2.183l1.111.953 4.922-4.922-1.23-1.15C23.614 1.388 19.747-.057 15.756 0 6.628 0 0 6.589 0 15.638c0 9.05 6.787 15.836 15.757 15.836 4.03.054 7.93-1.42 10.915-4.128l1.19-1.11-5-4.922-1.112.992z"
            fill="currentColor"
          ></path>
          <circle cx="15.519" cy="15.717" r="5.279" fillOpacity="1" fill="#ff4f39"></circle>
        </g>
      </svg>
      <div
        className={classNamePrefix + '-content'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginLeft: '10px',
        }}
      >
        <div className={classNamePrefix + '-content-stars'} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {starsMarkup}
        </div>
        <span
          className={classNamePrefix + '-content-text'}
          style={{ marginTop: '8px', fontSize: '13px', textAlign: 'right', letterSpacing: '0.1em' }}
        >
          {reviewsCount} REVIEWS
        </span>
      </div>
    </div>
  )
}

export function Star({ colored }: StarProps) {
  return (
    <div
      style={{
        marginRight: '5px',
        width: '13px',
        height: '13px',
      }}
    >
      <svg width="17" height="17" viewBox="0 0 17 17">
        <path
          fill={colored ? '#FC3C2E' : '#d3cbcb'}
          d="M16.956 6.5c-.11-.343-.412-.587-.769-.62l-4.848-.443L9.42.91C9.28.578 8.958.363 8.601.363c-.359 0-.68.215-.822.547L5.862 5.437l-4.85.444c-.356.033-.657.276-.768.62-.11.342-.009.719.261.956l3.665 3.242-1.08 4.803c-.08.353.056.718.347.93.156.113.338.171.523.171.158 0 .316-.043.457-.128L8.6 13.953l4.181 2.522c.306.185.692.168.982-.044.29-.212.426-.577.347-.93L13.03 10.7l3.664-3.242c.27-.237.373-.613.262-.957z"
          opacity="1"
        />
      </svg>
    </div>
  )
}
