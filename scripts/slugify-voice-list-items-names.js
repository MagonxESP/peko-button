import slugify from "slugify"
import voices from '../assets/voices.json' assert { type: "json" }
import fs from 'node:fs'

const languages = {
    zh: 'Chinese',
    ja: 'Japanese',
    en: 'English'
}

function serialize(translations) {
    return JSON.stringify(translations, null, 4)
}

voices.groups.forEach(({ voicelist }) => {
    voicelist.forEach((item) => {
        item.name = slugify(item.translation.English).toLowerCase()
    })
})

fs.writeFileSync('./assets/voices.json', serialize(voices))