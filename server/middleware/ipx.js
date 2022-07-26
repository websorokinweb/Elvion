import { createIPX, createIPXMiddleware } from 'ipx'
// https://github.com/unjs/ipx
const ipx = createIPX({
  domains: ['0.0.0.0'], // allowed external domains (should match domains option in nuxt.config)
  alias: {}, // base alias
  sharp: {}, // sharp options
  dir: "assets/images/",
})
export default createIPXMiddleware(ipx)