<template>
  <h1>Page: {{ screenName}}</h1>
  <p>ID: {{ data.activeScreen.id }}</p>
  <Counter />

  <p class="small">{{ data.serverElapsed }}ms</p>
</template>

<script lang="ts" setup>
  import Counter from '#root/components/Counter.vue'
  import {type ComputedRef, computed} from 'vue';
  import type { Data } from '#root/pages/catch-all/+data'
  import { useData } from '#root/renderer/useData';
  const data = useData<Data>();

  const screenName = computed(() => (data.value.activeScreen?.name));
  console.log(`screen name=${screenName.value}`);
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
