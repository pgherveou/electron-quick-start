import React from 'react'

export function People(props: { firstName: string; lastName: string }) {
  return (
    <div className="people">
      <div>{props.firstName}</div>
      <div>{props.lastName}</div>
    </div>
  )
}
