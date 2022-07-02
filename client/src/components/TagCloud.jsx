import { useState } from "react";
import { useEffect } from "react";
import __TagCloud from "TagCloud";

const tags = [
  '29 y.o.',
  '♥music',
  'have beard',
  '♥football',
  '♥games',
  '♥shaverma',
  '♥math'
]

export default function TagCloud() {

  const [isClouded, setIsClouded] = useState(false)

  useEffect(() => {
    if (!isClouded) {
      __TagCloud( '.cloud', tags)
      setIsClouded(true)
    }
  }, [isClouded])

  return (
    <></>
  )
}