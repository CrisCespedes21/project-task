import './index.css'
import { Lista } from './components/Sections/Lista'
import { Main } from './components/Sections/Main'
function App() {

  return (
    <>
      <div className="flex">
        <div>
          <Lista />
        </div>
        <div className="flex-auto w-2/3">
        <Main />
        </div>
      </div>
    </>
  )
}

export default App
