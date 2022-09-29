export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Node
  location: Node
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Node {
  name: string
  url: string
}
