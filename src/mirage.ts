import { createServer, Model } from 'miragejs'
import professionals from './mock'

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      professional: Model
    },

    seeds(server) {
      professionals.forEach((professional) =>
        server.create('professional', professional)
      )
    },

    routes() {
      this.namespace = 'api'

      this.get('/professionals', (schema) => {
        return schema.professionals.all()
      })

      this.get('/professional/:id', (schema, request) => {
        const id = request.params.id
        console.log('olha o id', id)
        return schema.professionals.find(id)
      })
    }
  })

  return server
}
