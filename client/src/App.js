import Navbar from "./components/navbar/navbar";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/home";
import Auth from "./components/auth/auth";

function App() {
    return ( 
        <div className="mx-auto bg-gradient-to-t from-red-100 to-white min-h-screen">
            <BrowserRouter>
                        <Navbar />
                        
                        <Routes>
                            <Route path="/" exact element={<Home/>}/>
                            <Route path="/auth"  element={<Auth/>}/>                        
                        </Routes>
                
            </BrowserRouter>
        </div>
    );
}

export default App;