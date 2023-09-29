import Header from './components/header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="main">
      <Header/>
      <Sidebar />
      <div className="container">
        <h1 className="title">My React App</h1>
        
        <button className="btn">Explore now</button>
      </div>
    </div>
  )
}

export default App
