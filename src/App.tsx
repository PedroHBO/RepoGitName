import { useEffect, useState } from "react"
import { Tweet } from "./components/Tweet"

import './App.css'
import { AppRoutes } from "./Routes";

interface Repo {
  name: string;
  description: string;
  html_url: string;
}




function App() {

  const [repos, setRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState(' ');

  useEffect(() => {
    fetch('https://api.github.com/users/pedroHBO/repos')
      .then(res => res.json())
      .then(data => setRepos(data))
  }, []);

  return (
    <div className="button-85">
      <AppRoutes />
      <ul>
        {repos.map(repo => {
          return (
            <li key={repo.name}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
// <input type="search" name="busca" id="busca" placeholder="Buscar..." onChange={e => setSearch(e.target.value)} value={search}/>
// <button className="button-85" onClick={createTweet}>Adicionar Tweet</button>
export default App
