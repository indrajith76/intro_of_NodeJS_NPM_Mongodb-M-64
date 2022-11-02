/* 
--------------------
        POST
--------------------
1. create post API 
2. use fetch with method POST
3. add headers to the fetch: 'content-type':'application/json'
4. add body the fetch to send data
5. Make sure to use JSON.stringify to send data
6. use express.json() as middle ware : app.use(express.json()); -->[https://reactgo.com/express-req-body-undefined/]
*/

/* 
---------------------------------
    Search/ Filter stored data   
---------------------------------
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const filtered = users.filter(
      (usr) => usr.name.toLowerCase().indexOf(search) >= 0
    ); 
    res.send(filtered);
  } else {
    res.send(users);
  }
});
*/

/* 
---------------------
      Mongodb
---------------------
1. sign up mongodb atlas
2. create database user/admin
3. Where would you like to connect from? 
    -> select "My Local Environment"
    -> click "Add My Current IP Address"
    -> click "Finish and Close"
4. Network Access > click "Add IP Address" > click "Allow Access form Anywhere"> click "Confirm"
5. Database > click "Connect" > click "Connect your application" > check on "include full driver code example" > copy the code and paste on your server side 
6. npm i mongodb
7. configure the copied async function to send data to the Database:
  (Insert Operation)
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ||  async function run() {                                                     
  ||   try {
  ||      const userCollection = client.db("simpleNode").collection("users");
  ||      const user = { name: "Indra", email: "indra@gmail.com" };
  ||      app.post("/users", async (req, res) => {
  ||        const user = req.body;
  ||        const result = await userCollection.insertOne(user);
  ||        user.id = result.insertedId;
  ||        res.send(user);
  ||      });
  ||    } 
  ||    finally {
  ||    }
  ||  }
  ||
  ||  run().catch((err) => console.log(err));
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  (READ Operation)
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ||  app.get("/users", async(req, res) => {
  ||    const cursor = userCollection.find({}); 
  ||    const users = await cursor.toArray(); 
  ||    res.send(users)
  ||  });
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

/*
---------------------
        POST
---------------------

const user = { name, email }; 

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = [...users, data];
        setUsers(newUsers);
      })
      .catch((err) => console.log(err));

    event.target.reset();

 */
