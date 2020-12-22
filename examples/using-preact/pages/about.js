import { useContext } from 'react'
import { FooContext } from '../FooContext'

export default function About() {
  const foo = useContext(FooContext)

  return <div>About us {foo}</div>
}
