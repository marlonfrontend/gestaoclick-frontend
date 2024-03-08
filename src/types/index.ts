export type User = {
  name: string
}

export type Post = {
  id: string
  title: string
  body: string
  user: User
}
