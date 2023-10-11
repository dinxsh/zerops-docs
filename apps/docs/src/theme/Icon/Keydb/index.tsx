import { IconProps } from "@medusajs/icons/dist/types"
import clsx from "clsx"
import React from "react"

const IconKeydb = (props: IconProps) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 295 295"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx("text-ui-fg-subtle", props.className)}
    >
      <path opacity=".88" fill="#ff0" d="M147.5 16.1 33.7 213.2h227.6z" />
      <path
        d="M147.5 1.9c7.9 0 14.2 6.4 14.2 14.2 0 .6 0 1.2-.1 1.8l91.1 52.6c2.4-1.8 5.4-2.9 8.6-2.9 7.9 0 14.2 6.4 14.2 14.2 0 5.9-3.6 10.9-8.7 13.1V200c5.1 2.2 8.7 7.2 8.7 13.1 0 7.9-6.4 14.2-14.2 14.2-3.2 0-6.2-1.1-8.6-2.9L161.6 277c.1.6.1 1.2.1 1.8 0 7.9-6.4 14.2-14.2 14.2-7.9 0-14.2-6.4-14.2-14.2 0-.6 0-1.2.1-1.8l-91.1-52.6c-2.4 1.8-5.4 2.9-8.6 2.9-7.9 0-14.2-6.4-14.2-14.2 0-5.9 3.6-10.9 8.7-13.1V94.9c-5.1-2.2-8.7-7.2-8.7-13.1 0-7.9 6.4-14.2 14.2-14.2 3.2 0 6.2 1.1 8.6 2.9l91.1-52.6c-.1-.6-.1-1.2-.1-1.8 0-7.8 6.3-14.2 14.2-14.2zM142 218.7H54.3l84.6 48.8c.9-.7 2-1.3 3.1-1.8v-47zm98.7 0H153v47.1c1.1.5 2.1 1.1 3.1 1.8l84.6-48.9zm-38.3-96.5-40.8 23.5c.1.6.1 1.2.1 1.8 0 5.9-3.6 10.9-8.7 13.1v47h95.1c.5-1.1 1.1-2.1 1.8-3.1l-47.5-82.3zm-109.8 0L45 204.6c.7.9 1.3 2 1.8 3.1H142v-47c-5-2.1-8.5-7-8.7-12.7v-.4c0-.6 0-1.2.1-1.8l-40.8-23.6zm-50.3-29c-.9.7-2 1.3-3.1 1.8v97.6L83 116.7 42.3 93.2zm210.4 0L212 116.7l43.8 75.9V95c-.9-.4-1.8-.9-2.6-1.4l-.5-.4zM149.3 30.3c-.6.1-1.2.1-1.8.1-.6 0-1.2 0-1.8-.1l-47.6 82.4 40.8 23.5c2.3-1.7 5.1-2.8 8.2-2.9h.4c3.2 0 6.2 1.1 8.6 2.9l40.8-23.5-47.6-82.4zm13.3.9 43.8 75.9 40.7-23.5c-.1-.4-.1-.9-.1-1.3v-.4c0-.6 0-1.2.1-1.8l-84.5-48.9zm-30.2 0L47.8 80.1c.1.6.1 1.2.1 1.8 0 .6 0 1.2-.1 1.8l40.7 23.5 43.9-76z"
        fill="#000200"
      />
    </svg>
  )
}

export default IconKeydb
