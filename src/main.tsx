import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model, Response } from 'miragejs'

import { App } from './App.tsx'

import { profiles } from './data/profiles.ts'

const PROFILE_LOGIN = {
  email: 'admin@admin.com',
  password: '123456',
}

type RequestLogin = typeof PROFILE_LOGIN

createServer({
  models: {
    profile: Model,
  },

  seeds(server) {
    server.db.loadData({
      profiles,
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/profiles', () => {
      return this.schema.all('profile')
    })

    this.post('/login', (schema, request) => {
      const requestedLogin: RequestLogin = JSON.parse(request.requestBody)

      if (requestedLogin?.email !== PROFILE_LOGIN.email) {
        return new Response(401)
      }

      if (requestedLogin?.password !== PROFILE_LOGIN.password) {
        return new Response(401)
      }

      return new Response(202)
    })
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
