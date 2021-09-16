import React from 'react'
import fetch from 'cross-fetch'
import { ClutchReviewsData, GetClutchReviewsDataProps } from './types'

import { SmallLogoBadge } from './SmallLogoBadge'
import { BigLogoBadge } from './BigLogoBadge'

const VARIANTS = {
  smallLogo: SmallLogoBadge,
  bigLogo: BigLogoBadge,
}

export function ClutchBadge({
  variant,
  classNamePrefix = 'clutch-badge',
  ...props
}: ClutchReviewsData & { variant: keyof typeof VARIANTS }) {
  const Component = VARIANTS[variant]
  if (!Component) {
    throw new Error(`No such clutch badge's variant as: ${variant}`)
  }
  return <Component classNamePrefix={classNamePrefix} {...props} />
}

export async function getClutchReviewsData({
  clutchProfileHandle,
}: GetClutchReviewsDataProps): Promise<Omit<ClutchReviewsData, 'classNamePrefix'>> {
  const response = await fetch(`https://clutch.co/profile/${clutchProfileHandle}`).then((r) => r.text())

  return {
    starsCount: Number(getStarsCount(response)),
    reviewsCount: Number(getReviewsCount(response)),
  }
}

function getStarsCount(html: string) {
  return getItemProp(html, 'ratingValue')
}

function getReviewsCount(html: string) {
  return getItemProp(html, 'reviewCount')
}

function getItemProp(html: string, itemProp: string) {
  const startIndex = html.indexOf(`itemprop="${itemProp}"`)
  const start = html.substring(startIndex)
  return start
    .substr(start.indexOf('">') + 2, start.substring(start.indexOf('">')).indexOf('</') - 2)
    .replace('\n', '')
    .trim()
}
