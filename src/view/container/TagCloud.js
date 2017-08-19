import { ascend, chain, countBy, descend, equals, head, identity, ifElse, last, map, pipe, prepend, prop, replace, sort, sortWith, toPairs, values, view } from 'ramda'
import { connect } from 'react-redux'
import { appPosts } from 'store/app/selectors'
import { tagOrderOrder } from 'store/tag-order/selectors'
import TagCloudPresentation from 'view/presentation/TagCloud'

const prependTagName = chain(prepend, pipe(head, replace('+', ' ')))

const tagsWithOccurrence = pipe(
  view(appPosts),
  values,
  chain(prop('tags')),
  countBy(identity),
  toPairs,
  map(prependTagName)
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

export default TagCloud
