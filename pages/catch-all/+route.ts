export {route}

import type {RouteSync} from 'vike/types';

const route: RouteSync = (pageContext): ReturnType<RouteSync> => {
    const {urlPathname} = pageContext;
    if (urlPathname.startsWith('/static-')) {
        console.log(`aborting catch-all for ${urlPathname}`);
        // return false
        return {
            precedence: -1,
        }
    }

    console.log(`catch-all for ${urlPathname}`);
    return {
        precedence: 99,
        //pageContext: {
            // E.g. redirect `/product/wrong/url` to `/product`
          //  redirectTo: '/product'
        //}
    }
}
