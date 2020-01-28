export interface User {
    email: string
    password?: string
    returnSecureToken?: boolean

    uid?: string;
    displayName?: string;
    photoURL?: string;
    emailVerified?: boolean;
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
    email_user?: string
    user_uid?: string
  }

  export interface Cv {
    id?: string
    title: string
    text: string
    author: string
    date: Date
    dateEnd?: Date
    city: string
    Description: string
    salary: string
    type: string
    Skills: string
    email_user?: string
  }

  export interface FbCreateResponse {
    name: string
  }
  