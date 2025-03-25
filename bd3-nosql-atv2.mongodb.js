/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv2';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);
