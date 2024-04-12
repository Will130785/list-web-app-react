import { createFileRoute } from '@tanstack/react-router'
import AddList from '../components/pages/addList'

export const Route = createFileRoute('/add')({
  component: AddList,
})
