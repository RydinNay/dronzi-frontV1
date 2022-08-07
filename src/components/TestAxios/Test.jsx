import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:5000/Drons_on_Tasks/select/user";

export default function App() {
  const [post, setPost] = React.useState(null);
  
  const dron = []

  React.useEffect(() => {
    axios.get(baseURL, {params:{"baseid": 1}}).then((response) => {
      setPost(response.data);
      const dron = response
      console.log(dron)
    });
  }, []);
  
  if (!post) return null;

  return (
<ul>
      {post.map(post => 
        <li key={post.DronTaskid}>{post.Date}</li>)
      }
</ul>
  
  );
}