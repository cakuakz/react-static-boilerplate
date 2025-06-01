import { RouterProvider } from 'react-router'
import { router } from './routes/main'
import { ThemeProvider } from './lib/theme'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
