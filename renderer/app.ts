import { createSSRApp, h, markRaw, reactive, ref } from 'vue'
import PageLayout from '#root/renderer/PageLayout.vue'
import { setPageContext } from '#root/renderer/usePageContext'
import type { PageContext } from 'vike/types'

export { createApp }

function createApp(pageContext: PageContext) {
  const { Page } = pageContext

  const pageRef = ref(markRaw(Page))

  const PageWithLayout = {
    render() {
      return h(PageLayout, {}, { default: () => h(pageRef.value) })
    }
  }

  const app = createSSRApp(PageWithLayout)

  // We use `app.changePage()` to do Client Routing, see `+onRenderClient.ts`
  objectAssign(app, {
    changePage: (pageContext: PageContext) => {
      Object.assign(pageContextReactive, pageContext)
      console.log(`changing page isClient=${pageContextReactive?.isClientSideNavigation}`);
      pageRef.value = markRaw(pageContext.Page)
    }
  })

  // When doing Client Routing, we mutate pageContext (see usage of app.changePage() in +onRenderClient.ts).
  // We therefore use a reactive pageContext.
  const pageContextReactive = reactive(pageContext)

  // Make `pageContext` accessible from any Vue component
  setPageContext(app, pageContextReactive);
  console.log('set pageContext for app isClient=', pageContextReactive?.isClientSideNavigation);

  return app
}

// Same as `Object.assign()` but with type inference
function objectAssign<Obj extends object, ObjAddendum>(
    obj: Obj,
    objAddendum: ObjAddendum
): asserts obj is Obj & ObjAddendum {
  Object.assign(obj, objAddendum)
}
