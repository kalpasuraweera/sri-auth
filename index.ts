const server = Bun.serve({
	port:3000,
	fetch(req){
		return new Response("Bun!");
	},
});

console.log(`Server Running on Port:${server.port}`);
