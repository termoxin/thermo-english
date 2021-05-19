import { FC } from 'react'
import { Input } from 'ui'

import { PostsFilterProps } from './posts-filter.types'
import {
  FilterButton,
  PostsFilterWrapper,
  FilterButtonsWrapper,
} from './styled'

const PostsFilter: FC<PostsFilterProps> = ({ filters, onChangeFilter }) => (
  <PostsFilterWrapper>
    <FilterButtonsWrapper>
      {filters.map((filter) => (
        <FilterButton key={filter.value} onClick={() => onChangeFilter(filter)}>
          {filter.label}
        </FilterButton>
      ))}
    </FilterButtonsWrapper>
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
