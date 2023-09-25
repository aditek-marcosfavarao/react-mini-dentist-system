import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'

import { App } from './App.tsx'

import { clients } from './data/index.ts'

createServer({
  models: {
    client: Model,
  },

  seeds(server) {
    server.db.loadData({
      clients,
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/clients', () => {
      return this.schema.all('client')
    })

    this.post('/login', () => {
      return this.schema.create('client')
    })
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
