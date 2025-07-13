import { useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]); 

  function carregarPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((resposta) => {
        setPosts(resposta.data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <button onClick={carregarPosts}>Carregar Dados</button>

      {posts.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;