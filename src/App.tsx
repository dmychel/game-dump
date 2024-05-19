import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./routes/Index";
import Error from "./routes/Error";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./routes/Profile";
import NewPost from "./routes/NewPost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
