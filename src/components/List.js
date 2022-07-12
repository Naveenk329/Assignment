import React from 'react'

export const List = (props) => {

  return (
    <div>
        <p>{props.ele.join(" ,")}</p>
    </div>
  )
}
