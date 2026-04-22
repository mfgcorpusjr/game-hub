import { useState } from "react"

import { Button } from "@/components/ui/button"

type Props = {
  children: string
  maxLength?: number
}

export default function ExpandableText({ children, maxLength = 300 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () =>
    setIsExpanded((currentIsExpanded) => !currentIsExpanded)

  if (children.length <= maxLength) {
    return <p className="leading-7">{children}</p>
  }

  return (
    <div>
      <p className="leading-7">
        {isExpanded ? children : `${children.slice(0, maxLength)}...`}
      </p>

      <Button size="xs" onClick={handleToggle}>
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </div>
  )
}
