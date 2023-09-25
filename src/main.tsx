import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'

import { App } from './App.tsx'

import { profiles } from './data/profiles.ts'

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
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
