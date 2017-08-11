import { lensPropOr } from 'ratatosk-ramda'

export const appProfile = lensPropOr({}, 'profile')

export const appPosts = lensPropOr({}, 'posts')

export const appTagOrder = lensPropOr({}, 'tagOrder')
