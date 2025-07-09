import { useEffect, useState } from 'react';
import axios from 'axios';
function ListaPosts() {
const [posts, setPosts] = useState([]);
useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => setPosts(response.data))
.catch(error => console.error(error));
}, []);
return (
<ul>
{posts.slice(0, 5).map(post => (
<li key={post.id}>{post.title}</li>
))}
</ul>
);
}
export default ListaPosts;