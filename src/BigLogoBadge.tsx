import React from 'react'
import { ClutchReviewsData, StarProps } from './types'

export function BigLogoBadge({ classNamePrefix, reviewsCount, starsCount }: ClutchReviewsData) {
  const starsMarkup = Array.from({ length: 5 }, (_, idx) => {
    return <Star key={idx} colored={idx + 1 <= Math.round(starsCount)} />
  })

  return (
    <div
      className={classNamePrefix + '-container'}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        width: 'fit-content',
      }}
    >
      <div
        className={classNamePrefix + '-logo-container'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <span
          className={classNamePrefix + '-content-text'}
          style={{ fontSize: '14px', lineHeight: 1, marginBottom: '5px' }}
        >
          REVIEWED ON
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.861 25" width="82" height="23">
          <path
            fill="currentColor"
            d="M22.861 0h4v25h-4zm18 17.025c0 3.826-3.217 4.131-4.174 4.131-2.391 0-2.826-2.238-2.826-3.588V8h-4v9.548c0 2.37.744 4.326 2.048 5.63 1.152 1.153 2.878 1.783 4.748 1.783 1.326 0 3.204-.413 4.204-1.326V25h4V8h-4v9.025zM52.861 2h-4v6h-3v4h3v13h4V12h3V8h-3zm15.597 17.917c-.871.783-2.021 1.217-3.283 1.217-2.782 0-4.825-2.043-4.825-4.848s1.978-4.762 4.825-4.762c1.24 0 2.412.413 3.305 1.196l.607.522 2.697-2.696-.675-.609C69.522 8.504 67.415 7.7 65.174 7.7c-5 0-8.631 3.608-8.631 8.565 0 4.936 3.718 8.673 8.631 8.673 2.283 0 4.412-.804 5.979-2.26l.652-.609-2.739-2.694-.608.542zM86.061 9.482C84.909 8.33 83.559 7.7 81.689 7.7c-1.326 0-2.828.413-3.828 1.325V0h-4v25h4v-9.365c0-3.826 2.718-4.13 3.675-4.13 2.391 0 2.325 2.239 2.325 3.587V25h4v-9.887c0-2.37-.495-4.326-1.8-5.631"
          />
          <path fill="#FC3C2E" d="M65.043 13.438a2.891 2.891 0 110 5.784 2.891 2.891 0 010-5.784" />
          <path
            fill="currentColor"
            d="M17.261 18.721c-1.521 1.565-3.587 2.413-5.761 2.413-4.456 0-7.696-3.5-7.696-8.304 0-4.826 3.24-8.326 7.696-8.326 2.153 0 4.196.847 5.74 2.391l.608.609 2.674-2.674-.587-.609C17.718 1.938 14.718.7 11.5.7 4.935.7 0 5.917 0 12.851 0 19.764 4.957 24.96 11.5 24.96c3.24 0 6.24-1.26 8.457-3.543l.587-.609-2.652-2.717-.631.63z"
          />
        </svg>
      </div>
      <div
        className={classNamePrefix + '-content'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginLeft: '10px',
          padding: '3px 0',
          height: '50px',
        }}
      >
        <div className={classNamePrefix + '-content-stars'} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {starsMarkup}
        </div>
        <span
          className={classNamePrefix + '-content-text'}
          style={{
            fontSize: '14px',
            textAlign: 'right',
            lineHeight: 1,
            letterSpacing: '0.1em',
          }}
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
        marginRight: '1px',
        width: '15px',
        height: '15px',
      }}
    >
      <svg width="15" height="15" viewBox="0 0 17 17">
        <path
          fill={colored ? '#FC3C2E' : '#d3cbcb'}
          d="M16.956 6.5c-.11-.343-.412-.587-.769-.62l-4.848-.443L9.42.91C9.28.578 8.958.363 8.601.363c-.359 0-.68.215-.822.547L5.862 5.437l-4.85.444c-.356.033-.657.276-.768.62-.11.342-.009.719.261.956l3.665 3.242-1.08 4.803c-.08.353.056.718.347.93.156.113.338.171.523.171.158 0 .316-.043.457-.128L8.6 13.953l4.181 2.522c.306.185.692.168.982-.044.29-.212.426-.577.347-.93L13.03 10.7l3.664-3.242c.27-.237.373-.613.262-.957z"
          opacity="1"
        />
      </svg>
    </div>
  )
}
