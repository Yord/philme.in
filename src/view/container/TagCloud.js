import { ascend, chain, countBy, descend, equals, head, identity, ifElse, last, pipe, prop, sort, sortWith, toPairs, values, view } from 'ramda'
import { connect } from 'react-redux'
import { TagCloud as TagCloudPresentation } from 'view/presentation/TagCloud'
import { appPosts } from 'store/app/selectors'
import { tagOrderOrder } from 'store/tag-order/selectors'

const tagsWithOccurrence = pipe(
  view(appPosts),
  values,
  chain(prop('tags')),
  countBy(identity),
  toPairs
)

const tagsByOccurrence = pipe(
  tagsWithOccurrence,
  sortWith([
    descend(last),
    ascend(head)
  ])
)

const tagsAlphabetically = pipe(
  tagsWithOccurrence,
  sort(ascend(head))
)

const tagOrder = view(tagOrderOrder)

export const TagCloud = connect(
  state => ({
    tagsWithOccurrence: ifElse(
      pipe(tagOrder, equals('alphabetically')),
      tagsAlphabetically,
      tagsByOccurrence
    )(state)
  })
)(TagCloudPresentation)
