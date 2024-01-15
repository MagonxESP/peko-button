<template>
	<v-app>
		<main>
			<Topbar></Topbar>
			<v-container class="mt-16">
				<NuxtPage></NuxtPage>
			</v-container>
		</main>
	</v-app>
</template>

<style>
:root {
  --background-color-primary: #ff9330;
  --text-color-primary: #FFFFFF;
}

main {
  margin: 0 auto;
  padding: 0 12px
}

@media (min-width: 1264px) {
  main {
    max-width: 1185px;
  }
}

@media (min-width: 960px) {
  main {
    max-width: 900px;
  }
}
</style>
