export type { Component }

import type { ComponentPublicInstance } from 'vue'

type Component = ComponentPublicInstance // https://stackoverflow.com/questions/63985658/how-to-type-vue-instance-out-of-definecomponent-in-vue-3/63986086#63986086
type Page = Component

// https://vike.dev/pageContext#typescript
declare global {
    namespace Vike {
        interface PageContext {
            Page: Page
            data?: {
                /** Value for <title> defined dynmically by by /pages/some-page/+data.js */
                title?: string
                /** Value for <meta name="description"> defined dynmically */
                description?: string
            }
            config: {
                /** Value for <title> defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
                title?: string
                /** Value for <meta name="description"> defined statically */
                description?: string
            }
            /** https://vike.dev/render */
            abortReason?: string

            site_id: string,
            activeScreenId: string,
            serverStart: number,
            serverElapsed: number,
            urlPathname: string, // todo: remove?
            urlLogical?: string,
            host: string,
            requestedPage: string,
        }
    }
}

