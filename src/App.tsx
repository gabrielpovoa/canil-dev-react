import { Router } from "./RouteList"

import AllAnimals from "./pages/AllAnimals"
import Header from "./pages/header"
import Global from "./style/global"

const App = () => {

  return <>
    <Global />
    <Header />
    <AllAnimals />
    <Router />
    </>
}

export default App
