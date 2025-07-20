import figlet from "figlet";
import { getUser, insertUser, updateAccessToken } from "./db.ts";
import jwt from "jsonwebtoken";
import { password } from "bun";

interface User {
  id: string;
  email: string;
  password: string;
  accessToken: string;
}

const server = Bun.serve({
  port: 3000,
  routes: {
    "/register": {
      POST: async req => {
        const body: Omit<User, "id" | "accessToken"> = await req.json() as User;
        insertUser.run(body.email, body.password);
        const token = jwt.sign({ email: body.email }, process.env.JWT_SECRET as string);
        updateAccessToken.run(token, body.email);
        const user = getUser.get(body.email);
        return Response.json({ message: "Success", data: user });
      },
    },
    "/login": {
      POST: req => {
        return Response.json({ message: "success" });
      }
    }
  },
  fetch(req) {
    return new Response("Welocme to SRI Auth");
  },
});

console.log(figlet.textSync("SRI Auth"));
console.log(`Server Running on Port:${server.port}`);
