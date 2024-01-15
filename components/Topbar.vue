<template>
	<v-app-bar
		:elevation="0"
		color="#728bf3"
	>
		<template v-slot:title>
			<v-app-bar-title>Peko Button</v-app-bar-title>
		</template>
		<template v-slot:append>
			<v-btn
				class="youtube-channel"
				href="https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ"
				prepend-icon="mdi-youtube"
				color="#F44336"
				variant="elevated"
			>
				Pekora Ch. 兎田ぺこら
			</v-btn>
			<v-btn
				class="twitter"
				href="https://twitter.com/usadapekora"
				prepend-icon="mdi-twitter"
				color="#2196F3"
				variant="elevated"
			>
				@usadapekora
			</v-btn>
			<v-btn
				prepend-icon="mdi-github"
				color="#272727"
				variant="elevated"
				href="https://github.com/Coceki/peko-button"
			>
				Help improve the website
			</v-btn>
			<v-btn variant="plain" icon="mdi-moon-waning-crescent"></v-btn>
			<v-btn variant="plain" icon="mdi-earth"></v-btn>
		</template>
  </v-app-bar>
</template>
