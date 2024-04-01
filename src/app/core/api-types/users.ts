enum Role {
  patrons = 'patrons',
  librarians = 'librarians'
}

export interface User {
  username: string
  role: Role
}
