class Food {
  id: number
  title: string
  image: string
  description: string
  infos: string[]
  grade: string

  constructor(
    id: number,
    title: string,
    image: string,
    description: string,
    infos: string[],
    grade: string
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.description = description
    this.infos = infos
    this.grade = grade
  }
}

export default Food
