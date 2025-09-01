import axios from "axios";
import React, { useEffect, useState} from "react";
import Loader from "../common/Loader";

const Sellers = () => {
       const [users, setUsers] = useState([]);
       const [isLoading, setIsLoading] = useState(false);
     // const [name, setName] = useState("");
    // useEffect(()=>{
       // document.title = `Name is ${name}`;
      // const heading = document.querySelector("h3");
       // heading.style.color = "red"; 
       // console.log("Component Mount.!!");
       // return () => {
       // console.log("Component UnMount.!!");
       // };
    // }, [name]);

    // axios
      //   .get("https://jsonplaceholder.typicode.com/users")
      //   .then((res) => console.log(res.data));
      // fetch("https://jsonplaceholder.typicode.com/users")
      //   .then((res) => res.json())
      //   .then((data) => console.log(data)).catch((error)=>{ });
    useEffect(() => {
      setIsLoading(true);
       axios.get("https://jsonplaceholder.typicode.com/users").then((res) => { 
          setUsers(res.data);
          setIsLoading(false);
    })
  }, []);
  // if(isLoading) return <h3>Loading..</h3>
    return (
      <>
        <h3>Admin Sellers Page</h3>
        {isLoading && <Loader />}
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </>  
    ); 
};

export default Sellers;