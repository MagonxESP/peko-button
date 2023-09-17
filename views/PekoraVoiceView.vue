<template>
    <Card v-for="group in voices.groups" class="voice-group">
        <h3>{{ $t(groupNameKey(group.name)) }}</h3>
        <div class="voice-list">
            <Button v-for="voice in group.voicelist" @click="play(voice.path)">{{ $t(groupVoiceListItemKey(group.name, voice.name)) }}</Button>
        </div>
    </Card>
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

<style>
h3 {
    margin-top: 4px;
    margin-bottom: 32px;
    font-size: 1.25rem;
    font-weight: 500;
}

.voice-group {
    padding: 12px;
    margin-bottom: 8px;
}

.voice-list {
    display: flex;
    flex-wrap: wrap;
}

.voice-list > * {
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>