import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import Home from 'components/Home'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<Home />)
