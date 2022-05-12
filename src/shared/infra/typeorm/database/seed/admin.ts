import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");
  const password = await hash("admin", 8);
  const id = uuidV4();
  await connection.query(`
    INSERT INTO USERS(id,username, name, email, password, "isAdmin", created_at, driver_license)
    values('${id}', 'admin', 'admin', 'admin@email.com', '${password}', true, 'now()', '123')  
  `);
  await connection.close();
}

create().then(() => {
  console.log("Admin created!");
});
