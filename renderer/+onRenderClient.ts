// https://vike.dev/onRenderClient
// /**/+onRenderClient.ts (usually /renderer/+onRenderClient.ts)
// Environment: browser
export { onRenderClient }

import { createApp } from '#root/renderer/app'
import { getPageTitle } from '#root/renderer/getPageTitle'
import type { OnRenderClientAsync } from 'vike/types'

let app: ReturnType<typeof createApp>
const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  // This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
  // to support SPA
  if (!pageContext.Page) throw new Error('My onRenderClient() hook expects pageContext.Page to be defined')

  if (!app) {
    console.log('creating app (+onRenderClient)', pageContext);
    app = createApp(pageContext)
    app.mount('#app')
  } else {
    console.log('changing page (+onRenderClient), pageContext=', pageContext);
    app.changePage(pageContext)
  }
  document.title = getPageTitle(pageContext)
}
