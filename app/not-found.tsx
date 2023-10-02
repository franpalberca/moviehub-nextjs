import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
        <h1>404 - Page Not Found</h1>
        <Link href='/'>Go to home</Link>
    </div>
  )
}

export default NotFound