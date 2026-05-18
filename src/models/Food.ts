class Food {
  id: number
  title: string
  image: string
  description: string
  infos: string[]
  grade?: string
  price: number

  constructor(
    id: number,
    title: string,
    image: string,
    description: string,
    infos: string[],
    grade: string,
    price: number
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.description = description
    this.infos = infos
    this.grade = grade
    this.price = price
  }
}

export default Food
