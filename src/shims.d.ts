declare module 'babel-loader' {
  import { LoaderContext } from 'webpack'

  function loader(this: LoaderContext<any>, contents: string, inputSourceMap?: Record<string, any>): void
  export function custom(callback: (babel: any, ...args: any[]) => any): typeof loader
  export = loader
}
