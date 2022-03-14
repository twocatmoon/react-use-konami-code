import './App.css'
import { useKonamiCode } from './lib'

function App() {
    useKonamiCode(() => alert('Code activated.'))

    useKonamiCode(() => alert('Code activated on Enter.'), { requireReturn: true })

    useKonamiCode(() => alert('Custom code activated.'), { sequence: [ 'a', 'b', 'x', 'y' ] })

    return (
        <div className="App">
            <header className="App-header">
                <p>React Konami Code</p>
            </header>
        </div>
    )
}

export default App
