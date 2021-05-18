export interface PostFilter {
  label: string
  value: string
}

export interface PostsFilterProps {
  filters: PostFilter[]
  onChangeFilter: (filter: PostFilter) => void
}
