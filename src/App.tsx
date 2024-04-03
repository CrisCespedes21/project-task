import './index.css'
import { Lista } from './components/Sections/Lista'
import { Main } from './components/Sections/Main'
import { useMediaQuery } from '@react-hook/media-query';

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Cambia el tamaño máximo según lo consideres necesario

  return (
    <>
      <div className="flex h-screen">
        {!isMobile && <div className='border h-full'>
          <Lista />
        </div>}
        <div className="flex-auto w-2/3 p-0 h-full mx-auto max-w-screen-xl">
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
