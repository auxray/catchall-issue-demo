<template>
  <h1>Static 1</h1>

  <p class="small">{{ data.serverElapsed }}ms</p>
</template>

<script lang="ts" setup>
  import type { Data } from '#root/pages/static-1/+data'
  import { useData } from '#root/renderer/useData';
  const data = useData<Data>();

  console.log(`in static-1`);

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
