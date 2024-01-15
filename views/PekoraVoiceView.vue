<template>
	<v-row v-for="group in voices.groups" class="mb-4 w-full">
		<v-card class="w-100">
			<v-card-title>{{ $t(groupNameKey(group.name)) }}</v-card-title>
			<v-card-item class="d-flex flex-wrap">
				<v-btn
					color="#ff9330"
					class="d-inline-block mr-3 mb-3"
					v-for="voice in group.voicelist" @click="play(voice.path)">
					{{ $t(groupVoiceListItemKey(group.name, voice.name)) }}
				</v-btn>
			</v-card-item>
		</v-card>
	</v-row>
</template>

<script setup>
import * as voices from '../assets/voices.json'

function play(path) {
	const audio = new Audio(`/voices/${path}`)
	audio.play()
}

function groupNameKey(name) {
	return `voice_group_${name}`
}

function groupVoiceListItemKey(groupName, name) {
	return `voice_list_${groupName}_${name}`
}
</script>
