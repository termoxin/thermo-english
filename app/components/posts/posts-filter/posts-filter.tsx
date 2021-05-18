import { FC } from 'react'
import { Input } from 'ui'

import { PostsFilterProps } from './posts-filter.types'
import { FilterButton, PostsFilterWrapper } from './styled'

const PostsFilter: FC<PostsFilterProps> = ({ filters, onChangeFilter }) => (
  <PostsFilterWrapper>
    {filters.map((filter) => (
      <FilterButton key={filter.value} onClick={() => onChangeFilter(filter)}>
        {filter.label}
      </FilterButton>
    ))}
    <Input
      data-testid="input-filter"
      placeholder="Search a word"
      onChange={(event) =>
        onChangeFilter({ label: 'Search', value: event.target.value })
      }
    />
  </PostsFilterWrapper>
)

export default PostsFilter
