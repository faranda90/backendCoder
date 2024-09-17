import patch from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)

export const __dirname = patch.dirname(__filename)
