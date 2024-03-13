USE [master]   

GO   

IF db_id('Scrapbook') IS NULL   

  CREATE DATABASE [Scrapbook]   

GO   

USE [Scrapbook]   

GO  

DROP TABLE IF EXISTS [Post];   

DROP TABLE IF EXISTS [Category];   

DROP TABLE IF EXISTS [UserProfile];     

 

CREATE TABLE [UserProfile] (   

  [Id] integer PRIMARY KEY IDENTITY, 
  [Name] nvarchar(50) NOT NULL, 
  [Email] nvarchar(555) NOT NULL, 
  [ImageLocation] nvarchar(255), 
  [IsAdmin] bit NOT NULL,  
  [FamilyGUID] nvarchar(50) NOT NULL,  
)  


CREATE TABLE [Category] ( 
  [Id] integer PRIMARY KEY IDENTITY, 
  [Name] nvarchar(50) NOT NULL 
) 


CREATE TABLE [Post] (  
  [Id] integer PRIMARY KEY identity NOT NULL, 
  [Title] nvarchar(255) NOT NULL,  
  [Content] text NOT NULL, 
  [Image1] nvarchar(255),  
  [Image2] nvarchar(255), 
  [Image3] nvarchar(255), 
  [Image4] nvarchar(255), 
  [Caption1] nvarchar(255),  
  [Caption2] nvarchar(255), 
  [Caption3] nvarchar(255), 
  [Caption4] nvarchar(255), 
  [DateCreated] datetime NOT NULL, 
  [UserProfileId] integer NOT NULL,  
  [CategoryId] integer NOT NULL,  

  CONSTRAINT [FK_Post_Category] FOREIGN KEY ([CategoryId]) REFERENCES [Category] ([Id]), 
  CONSTRAINT [FK_Post_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id]) 
)  
 
GO