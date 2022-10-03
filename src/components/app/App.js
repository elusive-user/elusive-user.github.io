import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {MainPage, ComicsPage, Page404, SingleComicPage} from "../pages";
import AppHeader from "../appHeader/AppHeader";

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="elusive-user.github.io/marvelService" element={<MainPage/>}/>
                        <Route path="elusive-user.github.io/marvelService/comics" element={<ComicsPage/>}/>
                        <Route path="elusive-user.github.io/marvelService/comics/:comicId" element={<SingleComicPage/>}/>
                        <Route path="*" element={<Page404/>}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;