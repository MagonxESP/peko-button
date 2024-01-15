import enVoiceGroups from './lang/en/voice_groups.js'
import jaVoiceGroups from './lang/ja/voice_groups.js'
import zhVoiceGroups from './lang/zh/voice_groups.js'
import enVoiceGroupsItems from './lang/en/voice_list.js'
import jaVoiceGroupsItems from './lang/ja/voice_list.js'
import zhVoiceGroupsItems from './lang/zh/voice_list.js'

const en = {
	...enVoiceGroups,
	...enVoiceGroupsItems
}

const ja = {
	...jaVoiceGroups,
	...jaVoiceGroupsItems
}

const zh = {
	...zhVoiceGroups,
	...zhVoiceGroupsItems
}

console.log(en)

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	messages: {en, ja, zh}
}))
