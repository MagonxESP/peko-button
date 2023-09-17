<template>
  <header>
    <section>
      <h1 class="title">Peko Button</h1>
      <Link class="youtube-channel" href="https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ">
        <SvgIcon type="mdi" :path="mdiYoutube" class="icon" /> Pekora Ch. 兎田ぺこら
      </Link>
      <Link class="twitter" href="https://twitter.com/usadapekora">
        <SvgIcon type="mdi" :path="mdiTwitter" class="icon" /> @usadapekora
      </Link>
    </section>
    <section>
      <Button class="github">
        <SvgIcon type="mdi" :path="mdiGithub" class="icon" /> Help improve the website
      </Button>
      <Button :transparent="true" class="dark-mode">
        <SvgIcon type="mdi" :path="mdiMoonWaningCrescent" />
      </Button>
      <Button :transparent="true">
        <SvgIcon type="mdi" :path="mdiEarth" />
      </Button>
    </section>
  </header>
</template>

<script setup>
import Link from './Link.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTwitter, mdiYoutube, mdiGithub, mdiMoonWaningCrescent, mdiEarth } from '@mdi/js';
</script>

<style scoped>
header {
  --header-backgound-color: #728bf3;
  --header-text-color: #FFFFFF;
  display: flex;
  position: static;
  align-items: center;
  justify-content: space-between;
  background-color: var(--header-backgound-color);
  color: var(--header-text-color);
  padding: 0 16px;
  height: 64px;
}

section {
  display: flex;
}

section > * + * {
  margin-left: 16px;
}

.title {
  display: flex;
  font-size: 1.25rem;
  align-items: center;
}

.youtube-channel {
  background-color: #F44336;
}

.twitter {
  background-color: #2196F3;
}

.github {
  background-color: #272727;
  text-transform: uppercase;
}

.transparent-button {
  background-color: transparent;
}

.youtube-channel,
.twitter {
  font-size: 14px;
  letter-spacing: 1.25px;
}

.icon {
  height: 18px;
  margin-right: 8px;
}
</style>
