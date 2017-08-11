import { ChangeRequest } from 'ratatosk-event-handlers'

export const SortTagsAlphabeticallyType = 'TAG_ORDER/SORT_ALPHABETICALLY'
export const SortTagsAlphabetically = ChangeRequest(SortTagsAlphabeticallyType)

export const SortTagsDescendingByOccurrenceType = 'TAG_ORDER/SORT_DESC_BY_OCCURRENCE'
export const SortTagsDescendingByOccurrence = ChangeRequest(SortTagsDescendingByOccurrenceType)
