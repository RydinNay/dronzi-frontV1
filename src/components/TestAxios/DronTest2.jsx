import axios from "axios";
import { values } from "mobx";
import React from "react";

const baseURL = "http://127.0.0.1:5000/Drons_on_Tasks/select/user";

export default function App() {
  const [post, setPost] = React.useState(null);

  const dron = []
  
  React.useEffect(() => {
    axios.get(baseURL, {params:{baseid: 1}}).then((response) => {
      //console.log(response)
      setPost(response.data)
      dron = response.data
    });
}, []);
  if (!post) return null;

  console.log(dron)


  return (
    <div>
      <>{}</>
    </div>
  );
}