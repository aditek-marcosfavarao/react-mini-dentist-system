export interface UserType {
  id: number
  name: string
  fullName: string
  email: string
  cpf: string
  rg: string
  birth: Date
  age: string
  type: string
  nextConsult: Date
  lastConsult: Date
  lastEdition: Date
  allergy: boolean
  allergyType: string
  description: string
  address: {
    place: string
    number: string
    city: string
    state: string
    zipCode: string
  }
}
