// https://vike.dev/data
import {mockPages} from '#root/server/mockPages';

export { data }
export type Data = Awaited<ReturnType<typeof data>>

// this file always runs on the server-side, see https://vike.dev/data#server-side
import type { PageContextServer } from 'vike/types'

const data = async (pageContext: PageContextServer) => {
  const {serverStart, activeScreenId} = pageContext;
  const activeScreen = mockPages.find(({id}) => id === activeScreenId);
  console.log(`serverStart=${serverStart}`);

  return {
    activeScreen,
    serverElapsed: new Date().getTime() - serverStart,
  };
}
