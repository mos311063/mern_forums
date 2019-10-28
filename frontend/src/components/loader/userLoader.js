import React from 'react'
import ContentLoader from 'react-content-loader'

export default function PostLoader() {
  return (
    <ContentLoader
      height={80}
      width={300}
      speed={1}
      primaryColor="#f3f3f3"
      secondaryColor="#85adad"
      style={{ width: '200px' }}
    >
      <rect x="60" y="15" rx="0" ry="0" width="50" height="50" />
      <circle cx="150" cy="40" r="8" />
      <circle cx="190" cy="40" r="8" />
      <circle cx="230" cy="40" r="8" />
      <circle cx="270" cy="40" r="8" />
    </ContentLoader>
  )
}
