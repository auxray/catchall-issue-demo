<template>
  <a :class="{ active: isActive }">
    <slot />
  </a>
</template>
<style scoped>
a {
  padding: 2px 10px;
  margin-left: -10px;
}
a.active {
  background-color: #eee;
}
</style>
<script lang="ts" setup>
import { useAttrs, computed } from 'vue'
import { usePageContext } from '#root/renderer/usePageContext'

const pageContext = usePageContext()
const { urlPathname } = pageContext;
const { href } = useAttrs() as { href: string }
const isActive = computed(() => {
  return href === '/' ? urlPathname === href : urlPathname?.startsWith(href);
});

if (isActive.value) console.log(`urlPathname=${urlPathname}, href=${href}, isActive=${isActive.value}`);
</script>
