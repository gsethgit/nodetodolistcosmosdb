var config = {}

config.host = process.env.HOST || "https://caddocdbsql.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "HFULs6MtHcnx41IWfvekbVsFXPZM50yP5oK0ZjUz6imix0O50sirdaJp5VfFWUFyqOTbXhfT4b0SDFmB5FVa0A==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
