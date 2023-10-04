import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center font-semibold text-3xl m-10'>Access Token and Refresh Token</h2>
            <p className='mb-10'><span className='font-bold '>Access Token:</span>An access token is a type of credential used to authenticate and authorize a user in various authentication protocols, including OAuth 2.0. It is a short-lived token that grants access to specific resources on behalf of a user. Access tokens are often used for securing API requests. They are typically stored in memory on the client-side during a user's session.</p>
            <p><span className='font-bold '>Refresh Token:</span>A refresh token is a long-lived token used to obtain a new access token once the current access token expires. It is a more secure way to manage user sessions without requiring the user to log in repeatedly. Refresh tokens should be securely stored on the client-side, such as in an HTTP-only cookie, and kept confidential.</p>
            <h2 className='text-center font-semibold text-3xl m-10'>SQL vs. NoSQL Databases:</h2>
            <p className='mb-10'><span className='font-bold '>SQL (Structured Query Language) Databases: </span> SQL databases are relational databases that use a tabular structure for storing data. They are well-suited for structured data and complex queries. SQL databases use SQL for data manipulation and support ACID (Atomicity, Consistency, Isolation, Durability) transactions. Examples include MySQL, PostgreSQL, and Oracle</p>
            <p><span className='font-bold '>NoSQL Databases:</span>NoSQL databases are non-relational databases designed for handling unstructured or semi-structured data. They offer high scalability and flexibility. NoSQL databases use various data models, including document-based, key-value, column-family, and graph databases. Examples include MongoDB, Cassandra, and Redis.</p>
            <h2 className='text-center font-semibold text-3xl m-10'>Express.js:</h2>
            <p className='mb-10'><span className='font-bold '>Express.js:</span>Express.js is a popular, fast, and minimalist web framework for Node.js. It simplifies the development of web applications and APIs by providing a robust set of features for routing, middleware, and HTTP request/response handling. Express.js is widely used in building server-side applications and RESTful APIs.</p>

            <h2 className='text-center font-semibold text-3xl m-10'>Nest JS:</h2>
            <p className='mb-10'><span className='font-bold '>Nest JS:</span>Express.js is a popular, fast, and minimalist web framework for Node.js. It simplifies the development of web applications and APIs by providing a robust set of features for routing, middleware, and HTTP request/response handling. Express.js is widely used in building server-side applications and RESTful APIs.</p>
            <h2 className='text-center font-semibold text-3xl m-10'>MongoDB Aggregate</h2>
            <p className='mb-10'><span className='font-bold '>MongoDB Aggregate:</span>MongoDB Aggregate is a powerful feature in MongoDB used for data aggregation and transformation. It allows you to perform complex operations on data stored in MongoDB collections. Aggregation pipelines consist of multiple stages that can filter, group, sort, and transform data. Common operations include $match, $group, $project, and $lookup. Aggregation is useful for generating reports, analytics, and summarizing large datasets.</p>

        </div>
    );
};

export default Blog;