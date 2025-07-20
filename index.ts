import figlet from "figlet";

const server = Bun.serve({
	port: 3000,
	fetch(req) {
		return new Response("Bun!");
	},
});

console.log(figlet.textSync("SRI Auth"));
console.log(`Server Running on Port:${server.port}`);
