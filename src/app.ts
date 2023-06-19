import express from 'express'

export default class App {
  public readonly server: express.Application

  constructor() {
    this.server = express()
    this.middlewares()
  }

  private middlewares(): void {
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true }))
  }
}
