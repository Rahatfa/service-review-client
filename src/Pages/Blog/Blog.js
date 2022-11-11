import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-p'>
           <div>
           <h1>Difference between SQL and NoSQL</h1>
            <p>

           <span>SQL</span>

            <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</li>
            <li>These databases have fixed or static or predefined schema</li>
            <li>These databases are not suited for hierarchical data storage.</li>
            <li>These databases are best suited for complex queries</li>
            <li>Vertically Scalable</li>
            <li>Follows ACID property</li>
            <li>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</li>       	
            <span>NoSQL</span>
            <li>Non-relational or distributed database system.</li>
            <li>They have dynamic schema.</li>
            <li>These databases are best suited for hierarchical data storage.</li>
            <li>These databases are not so good for complex queries.</li>
            <li>Horizontally scalable.</li>
            <li>Follows CAP(consistency, availability, partition tolerance)</li>
            <li>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</li>    
            </p>
           </div>
           <div>
            <h2>What is JWT, and how does it work?</h2>
            <p>
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a 
                compact and self-contained way for securely 
                transmitting information between parties as a JSON object. 
                This information can be verified and trusted because it is digitally signed.
            </p>
           </div>
           <div>
                <h2>
                    What is the difference between javascript and NodeJS?
                </h2>
            <div>
            <p>

           <span>javascript</span>

                <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                <li>Javascript can only be run in the browsers.</li>
                <li>It is basically used on the client-side.</li>
                <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>
                <li>Javascript is used in frontend development.</li>
                <li>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</li>
                    	
            <span>NodeJS</span>
                <li>NodeJS is a Javascript runtime environment.</li>
                <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                <li>It is mostly used on the server-side.</li>
                <li>Nodejs does not have capability to add HTML tags.</li>
                <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</li>
                <li>Nodejs is used in server-side development.</li>
                <li>Nodejs is written in C, C++ and Javascript.</li>    
            </p>
           </div>
                <div>
                    <h2>How does NodeJS handle multiple requests at the same time?</h2>
                    <p>
                        How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places 
                        them into EventQueue. NodeJS is built with the concept of event-driven architecture.
                         NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </p>
                </div>
           
           
           </div>
        </div>
    );
};

export default Blog;