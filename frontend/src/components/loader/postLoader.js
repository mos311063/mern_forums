import React from 'react'
import ContentLoader from 'react-content-loader'

export default function PostLoader() {
  return (
    <ContentLoader
      height={160}
      width={300}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#85adad"
    >
      <circle cx="14" cy="23" r="8" />
      <rect x="32" y="11" rx="5" ry="5" width="260" height="38" />
      <rect x="32" y="64" rx="5" ry="5" width="260" height="38" />
      <circle cx="14" cy="74" r="8" />
    </ContentLoader>
  )
}
