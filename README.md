# Scrapbook
![Scrapbook](https://github.com/CalBoyt/Scrapbook/assets/143360446/ec6796a1-ecb6-46a1-a05e-77e5b16bc777)

## Overview

Scrapbook is a family app that allows users to interactively share memories, called scraps, with extended family. It features content search by keyword, login validation, admin functionality, GUID for each extended family, and full CRUD capability. Scrapbook is a full stack project in C#/.Net 8 and ReactJS using ASP.NET, Microsoft SQL Server with Web API.

## ERD
![ScrapbookERD](https://github.com/CalBoyt/Scrapbook/assets/143360446/ae4fe54c-0066-4dbb-91d2-235a72c7155d)
![ScrapbookERD](https://github.com/CalBoyt/Scrapbook/assets/143360446/ae4fe54c-0066-4dbb-91d2-235a72c7155d)

## Wireframe
![ScrapbookMiroWireframe](https://github.com/CalBoyt/Scrapbook/assets/143360446/07c473ae-eb69-439e-8d0c-be7d8174cc95)
![ScrapbookMiroWireframe](https://github.com/CalBoyt/Scrapbook/assets/143360446/07c473ae-eb69-439e-8d0c-be7d8174cc95)

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
5. Create the Scrapbook database by running the SQLCreateDatabase.sql script in the SQL folder.
6. Add seed data by running the SQLSeedData.sql script in the SQL folder.
7. Use the admin email address to log in: cal@email.com.
