import { useRef } from 'react'
import { useEffect } from 'react'
import TagCloud from 'TagCloud'



export default function SkillsPage() {

  const tags = [
    'loh',
    'pidr',
    'debik',
    'hui',
    'pizda',
    'dzhigurda'
  ]

  useEffect(() => {
    TagCloud( '.cloud', tags)
    console.log('clouded');
  }, tags)

  

  return (
    <div className="page">
      <h1>Skills</h1>
      <div className="cloud"></div>
    </div>
  )
}