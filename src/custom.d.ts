type RecordItem = {
  tags: string[]
  notes: string
  type: string
  mount: number
  createAt?: Date
}
type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'
  save: () => void
  update: (name: string, id: string) => 'success' | 'duplicated' | 'not found'
  remove: (id: string) => boolean
}

interface Window {

}