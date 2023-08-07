import { useState } from "react";
import { toast } from "react-toastify";

import styles from "../styles/userData.module.css";

function UserData({ user, handleUpdate, deleteContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: "DELETE",
    });

    deleteContact(user.id);

    user = {};
  };

  const handleSubmit = () => {
    if (!name || !number || !email) {
      console.log("enter som");
      toast.error("Please write something in post", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          phone: number,
          email: email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          handleUpdate(data.id, data);
          setEmail("newUsers");
          setName("");
          setNumber("");
          console.log("after", user);
        });
    }
  };

  if (Object.keys(user).length === 0) {
    return <div className={styles.empty}>Click on user to see deatails</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.addContact}>
        <input
          required
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="number"
          value={number}
          placeholder="Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          required
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Update</button>
      </div>
      <div className={styles.deletBtn}>
        <button onClick={handleDelete}>Delete Contact</button>
      </div>
      <div className={styles.userDataContainer}>
        <div className={styles.userProfile}>
          <img
            id={styles.userpic}
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            alt="pic"
          />
          <div className={styles.userName}>
            <span className={styles.name}>{user.name}</span>
            <span className={styles.email}>{user.email}</span>
          </div>
          <div className={styles.phone}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/9639/9639652.png"
              alt="call"
            />
            {user.phone ? <span>{user.phone}</span> : ""}
          </div>
        </div>
      </div>

      {user.address ? (
        <div className={styles.addressConatainer}>
          <div className={styles.add}>
            <span className={styles.title}>Address</span>
            <span className={styles.value}>{user.address.street}</span>
          </div>
          <div className={styles.add}>
            <span className={styles.title}>City</span>
            <span className={styles.value}>{user.address.city}</span>
          </div>
          <div className={styles.add}>
            <span className={styles.title}>Zip code</span>
            <span className={styles.value}>{user.address.zipcode}</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserData;
