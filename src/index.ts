import { custom } from 'babel-loader'

export = custom(function () {
  return {
    config(config: { options: Record<string, any> }) {
      return {
        ...config.options,
        filename: `${config.options.filename}${this.resourceQuery}`
      }
    }
  }
})
