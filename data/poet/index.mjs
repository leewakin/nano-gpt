import { writeFileSync } from 'node:fs'
import poets from './poet.json' assert { type: 'json'}

const str = poets.map(poet=>poet.paragraphs).join('\n')

writeFileSync('./data/poet/input.txt', str, 'utf-8')