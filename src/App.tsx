import './App.css'
import { Jetton } from './components/Jetton';
import { Layout } from './shared/Layout/Layout';

function App() {

  return (
    <Layout>
      <div className="main-div">
        <h1>Welcome to Jetton App</h1>
        <Jetton />
      </div>
    </Layout>
  )
}

export default App
