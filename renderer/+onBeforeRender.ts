import {PageContextServer} from 'vike/types';
import {render} from 'vike/abort'
import {mockStaticRoutes} from '#root/server/mockPages';

export async function onBeforeRender(pageContext: PageContextServer) {
    // console.log(`pageContext=${JSON.stringify(pageContext, null, 4)}`);
    const {host, site_id, activeScreenId, requestedPage} = pageContext;

    console.log(`activeScreenId: ${activeScreenId}, requestedPage: ${requestedPage}`);

    if (!site_id) {
        console.error(`No Site found for host ${host}!`);
        throw render(404, "Website not found.");
    }

    // console.log(`saasApp._id=${saasApp._id}, saasAppSettings=${JSON.stringify(getSaasAppSettings(saasApp), null, 4)}`);

    if (!activeScreenId && !mockStaticRoutes.includes(requestedPage)) {
        console.error(`Requested page ${requestedPage} not found for ${host}!`);
        throw render(404, "Page not found.");
    }

    return {
        pageContext: {
            serverElapsed: new Date().getTime() - pageContext.serverStart,
        }
    }
}
