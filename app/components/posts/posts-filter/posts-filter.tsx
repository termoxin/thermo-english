import { FC } from 'react'
import { Input } from 'ui'

import { PostsFilterProps } from './posts-filter.types'

const PostsFilter: FC<PostsFilterProps> = ({ filters, onChangeFilter }) => {
  return (
    <div>
      {filters.map((filter) => (
        <button key={filter.value} onClick={() => onChangeFilter(filter)}>
          {filter.label}
        </button>
      ))}
      <Input
        data-testid="input-filter"
        placeholder="Search a word"
        onChange={(event) =>
          onChangeFilter({ label: 'Search', value: event.target.value })
        }
      />
    </div>
  )
}

export default PostsFilter
