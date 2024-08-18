export default interface SingleUser {
  data: {
    id: Number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
  support: {
    url: string
    text: string
  }
}
