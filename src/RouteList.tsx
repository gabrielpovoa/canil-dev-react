import { Routes, Route } from 'react-router-dom'
import App from './App'
import Cats from './pages/cats'
import Dogs from './pages/dogs'
import Fish from './pages/fish'
import NotFound from "./pages/notFound"

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/dog' element={<Dogs />} />
            <Route path='/cat' element={<Cats />} />
            <Route path='/fish' element={<Fish />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}