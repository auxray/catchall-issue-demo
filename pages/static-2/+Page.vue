<template>
  <h1>Static 2</h1>

  <p class="small">{{ data.serverElapsed }}ms</p>
</template>

<script lang="ts" setup>
  import type { Data } from '#root/pages/static-2/+data'
  import { useData } from '#root/renderer/useData';
  const data = useData<Data>();

  console.log(`in static-2`);

</script>

<style>
code {
  display: block;
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
  height: 35vh;
  overflow-y: scroll;
}
.small {
  font-style: italic;
  font-size: .9rem;
}
</style>
