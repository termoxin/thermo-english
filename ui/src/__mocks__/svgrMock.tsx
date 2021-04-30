import * as React from 'react'

export default 'SvgrURL'

const SvgrMock =
  React.forwardRef <
  HTMLSpanElement >
  ((props, ref) => <span ref={ref} {...props} />)

export const ReactComponent = SvgrMock
