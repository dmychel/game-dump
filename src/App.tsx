import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./routes/Index";
import Error from "./routes/Error";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./routes/Profile";
import Post from "./routes/Post";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
