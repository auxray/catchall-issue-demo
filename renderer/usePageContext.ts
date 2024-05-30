// https://vike.dev/usePageContext

export { usePageContext }
export { setPageContext }

import { inject } from 'vue'
import type { App, InjectionKey } from 'vue'
import type { PageContext } from 'vike/types'

const key: InjectionKey<PageContext> = Symbol()

/** https://vike.dev/usePageContext */
function usePageContext() {
  // console.log(`key=`, key);
  const pageContext = inject(key)
  // console.log(`pageContext=${JSON.stringify(pageContext, null, 4)}, key=`, key);
  if (!pageContext) throw new Error('setPageContext() not called in parent')
  return pageContext
}

function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext)
}
