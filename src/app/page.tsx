import React from "react";
import { PrismaClient } from "@prisma/client";

const App = () => {
  const prisma = new PrismaClient();

  async function main() {
    // const users = await prisma.users.findMany()
    // console.log(users)
    const user = await prisma.user.create({
      data: {
        email: "wow@gmail.com",
        name: "hello",
      },
    });
    console.log(user);
  }
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async () => {
      await prisma.$disconnect();
      process.exit(1);
    });

  return <div>App</div>;
};

export default App;
