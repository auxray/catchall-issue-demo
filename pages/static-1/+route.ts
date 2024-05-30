// export default '/static-1';

export {route}

import type {RouteSync} from 'vike/types';

const route: RouteSync = (pageContext): ReturnType<RouteSync> => {
    const {urlPathname} = pageContext;
    if (urlPathname.startsWith('/static-1')) {
        console.log(`precedence 99 for ${urlPathname}`);
        return {
            precedence: 99,
        }
    }

    console.log(`route static-1 for ${urlPathname} (precedence=-1)`);
    return {
        precedence: -1,
    }
}
