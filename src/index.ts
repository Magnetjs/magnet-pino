import { Module } from 'magnet-core/module'
import * as pino from 'pino'

import defaultConfig from './config/pino'

export default class Pino extends Module {
  async setup () {
    const config = this.prepareConfig('pino', defaultConfig)
    this.app.pino = pino(config)
    this.app.log = this.app.pino
  }
}
