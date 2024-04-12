import { createFileRoute } from '@tanstack/react-router'
import AllLists from '../components/pages/allLists'

export const Route = createFileRoute('/all')({
  component: AllLists,
})
