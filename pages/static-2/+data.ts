// https://vike.dev/data
export { data }
export type Data = Awaited<ReturnType<typeof data>>

// this file always runs on the server-side, see https://vike.dev/data#server-side
import type { PageContextServer } from 'vike/types'

const data = async (pageContext: PageContextServer) => {
  const {serverStart} = pageContext;
  console.log(`serverStart=${serverStart}`);

  return {
    serverElapsed: new Date().getTime() - serverStart,
  };
}
