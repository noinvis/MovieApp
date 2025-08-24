import AppProvider from "./provider"
import AppRoutes from "./routes"

const App = () => {
  return (
    <div className="bg-black text-white dark:bg-white dark:text-black">
      <AppProvider>
        <AppRoutes/>
      </AppProvider>
    </div>
  )
}

export default App