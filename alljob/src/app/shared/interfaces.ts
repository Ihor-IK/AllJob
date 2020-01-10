export interface User {
    email: string
    password: string
    returnSecureToken?: boolean
  }
  export interface FbAuthResponse {
    idToken: string
    expiresIn: string
  }

  export interface Job {
    id?: string
    title: string
    text: string
    author: string
    date: Date
    dateEnd?: Date
    city: string
    companyDescription: string
    salary: string
    type: string
    requiredSkills: string
  }

  export interface FbCreateResponse {
    name: string
  }
  