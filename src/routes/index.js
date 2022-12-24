import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../views/Home';
import MovieDetail from '../views/MovieDetail';
import MovieResults from '../views/MovieResults';

const RoutesComponents = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/movieResults/:title' element={<MovieResults/>}></Route>
            <Route path='/movieDetails/:movieId' element={<MovieDetail/>}></Route>
        </Routes>
    </BrowserRouter>
)
export default RoutesComponents;