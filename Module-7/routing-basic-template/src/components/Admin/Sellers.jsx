import axios from "axios";
import React, { useEffect, useState} from "react";
import Loader from "../common/Loader";

const Sellers = () => {
       const [users, setUsers] = useState([]);
       const [isLoading, setIsLoading] = useState(false);
       const [errors, setErrors] = useState("");
       const [name, setName] = useState("");
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
      fetchUsers();
    //   setIsLoading(true);
    //    axios
    //    .get("https://jsonplaceholder.typicode.com/users")
    //    .then((res) => { 
    //       setUsers(res.data);
    //       setIsLoading(false);
    // })
    // .catch((err) => {
    //   setErrors(err.message);
    //   // console.log("ajay", err);
    //   setIsLoading(false);
    // });
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setIsLoading(false);
    } catch (err) {
      setErrors(err.message);
      setIsLoading(false);
    } finally {
      console.log("Baaki sb thik");
    }
  };
  const addUser = () => {
    const newUser = {
      name,
      id: users.length + 1,
    };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser) 
      .then((res) => {
      // console.log(res);
      setUsers([res.data, ...users]);
    })
    .catch((err) => {
      setErrors(err.message);
      setUsers(users);
    });
  };

  // if(isLoading) return <h3>Loading..</h3>;
    return (
      <>
        <h3>Admin Sellers Page</h3>
        <input type="text" onChange={(e) => {
          setName(e.target.value);
        }}
        />
        <button onClick={addUser}>Add User</button>
        {isLoading && <Loader />}
        {errors && <em>{errors}</em>}
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </>  
    ); 
};

export default Sellers;