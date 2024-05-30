<template>
  <div id="page-container">
    <header id="topbar">
      <a href="/" id="logo-container">
        <img src="./logo.svg" height="30" width="30" alt="logo" />
      </a>
      <Link href="/page-1">Screen1</Link>
      <Link href="/page-2">Screen2</Link>
      <Link href="/page-3">Screen3</Link>
      <Link href="/static-1">Static1</Link>
      <Link href="/static-2">Static2</Link>
    </header>
    <div id="page-content"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
import Link from '#root/components/Link.vue'
import '#root/renderer/css/index.css'
</script>

<style>
#topbar a {
  padding: 10px 10px 2px 10px;
  margin: 0 10px;
}
#topbar a.is-active {
  background-color: #eee;
}

#page-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: auto;
}
#page-content {
  padding: 20px;
  padding-bottom: 50px;
}
#topbar {
  padding: 10px 20px 0px 20px;
  flex-shrink: 0;
  display: flex;
  line-height: 1.8em;
  border-bottom: 2px solid #eee;
}
#logo-container {

}
</style>
