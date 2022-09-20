import axios from 'axios'

export class AuthClass {
  async signIn(email: string, password: string): Promise<any> {
    return await new Promise((resolve, reject) => resolve(
      axios.post('/api/home/login', { email, password }).then((response) => {
        return response
      })
    ))
  }
}