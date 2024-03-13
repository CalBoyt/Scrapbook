# Scrapbook
![Scrapbook](https://github.com/CalBoyt/Scrapbook/assets/143360446/ec6796a1-ecb6-46a1-a05e-77e5b16bc777)

## Overview

Scrapbook is a full stack project in C#/.Net 8 and ReactJS using ASP.NET, Microsoft SQL Server with Web API allows users to interactively share memories, called scraps, with extended family.

## Users

Scrapbook has two types of users:

* Authors can create and manage their own Scraps and view Users
* Admins in addition to Author rights, Admins can add Users

## Installation Instructions

1. Install Microsoft SQL Server and Visual Studio Community.
2. Clone down this repo.
3. From the same directory as your package.json file, install your dependencies by running:
   ```
   npm install
   npm install react-router-dom
   npm install react-bootstrap bootstrap
   npm install reactstrap bootstrap
   
   ```
4. Open and launch the Scrapbook.sln file in Visual Studio Community.  
5. Create the Scrapbook database by running the SQLCreateDatabase.sql script.
6. Add seed data by running the SQLSeedData.sql script.
7. Use the admin email address to log in: cal@email.com.
