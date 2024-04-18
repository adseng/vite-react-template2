import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { URLS } from '@/router/const.ts'
import Home from '@/pages/home'


function Index() {
    return (
        <BrowserRouter basename={''}>
            <Routes>
                <Route path={URLS.home} element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index
