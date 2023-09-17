import voices from '../assets/voices.json' assert { type: "json" }
import fs from 'node:fs'

const languages = {
    zh: 'Chinese',
    ja: 'Japanese',
    en: 'English'
}

function serialize(translations) {
    return `export default ${JSON.stringify(translations, null, 4)}`
}

function voiceGroupsTranslations(code, language) {
    const translations = {}
    voices.groups.forEach(({ name, translation }) => {
        translations[`voice_group_${name}`] = translation[language] ?? translation.Japanese
    })
    fs.writeFileSync(`./lang/${code}/voice_groups.js`, serialize(translations))
}

function voiceListTranslations(code, language) {
    const translations = {}
    voices.groups.forEach(({ name: groupName, voicelist }) => {
        voicelist.forEach(({ name, translation }) => {
            translations[`voice_list_${groupName}_${name}`] = translation[language] ?? translation.Japanese
        })
    })
    fs.writeFileSync(`./lang/${code}/voice_list.js`, serialize(translations))
}

for (let [code, language] of Object.entries(languages)) {
    voiceGroupsTranslations(code, language)
    voiceListTranslations(code, language)
}