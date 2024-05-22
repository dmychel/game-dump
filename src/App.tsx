import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./routes/Index";
import Error from "./routes/Error";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./routes/profile/Profile";
import NewPost from "./routes/NewPost";
import AllGames from "./routes/profile/AllGames";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/all-games" element={<AllGames />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
