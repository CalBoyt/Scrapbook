USE [Scrapbook];   

GO   
  

set identity_insert [Category] on   

insert into [Category] ([Id], [Name])   

values (1, 'Family Photos'), (2, 'Homeschool'), (3, 'Sports'), (4, 'Just for fun'), (5, 'Church'), (6, 'Food'), (7, 'Pets'), (8, 'Travel'), (9, 'Birthday'), (10, 'Graduation'), (11, 'Babies'), (12, 'Wedding')   

set identity_insert [Category] off  
  

  

 set identity_insert [UserProfile] on   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (1,'Mom', 'cal@email.com', 'https://picsum.photos/200', 1, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (2,'Dad', 'dave@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (3,'Emily', 'emily@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (4,'Shay', 'shay@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (5,'Jordan', 'jordan@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (6,'Sydney', 'syd@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (7,'Isaac', 'isaac@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (8,'Hannah', 'hannah@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (9,'Granny', 'granny@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (10,'Grandpa', 'grandpa@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (11,'Delia', 'delia@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

insert into UserProfile (Id, [Name], Email, ImageLocation, IsAdmin, familyGUID) values (12,'Rohit', 'rohit@email.com', 'https://picsum.photos/200', 0, '90f49c08-6001-41dd-9181-8f6d61f56b29');   

set identity_insert [UserProfile] off  
  

  

set identity_insert [Post] on  

insert into Post (Id, Title, Content, DateCreated, Image1, Caption1, Image2, Image3, Image4, CategoryId, UserProfileId) values (1, 'New Family Photos', 'We just got these back and I love them! What do you think? We used a photographer that a friend recommended and she did a great job. Gosh, these kids are growing up so fast!', '2009-12-21', 'https://picsum.photos/200/300', 'Kissing Pic!', 'Family photos taken at Wheeler Farm', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 1, 1);   

insert into Post (Id, Title, Content, DateCreated, Image1, Caption1, Image2, Image3, Image4, CategoryId, UserProfileId) values (2, 'Dave and Caleens Visit Home', 'We enjoyed spending some time with you guys. Miss you. Here are some more pictures from your visit in August.', '2023-08-23', '../../Images/FamilyTime1.jpg', 'Dinner with Dave, Caleen, the boys, Uncle Joe, and Aunt Colleen', '../../Images/FamilyTime2.jpg', '../../Images/FamilyTime3.jpg', '../../Images/FamilyTime4.jpg', 4, 10);  

insert into Post (Id, Title, Content, DateCreated, Image1, Caption1, Image2, Image3, Image4, CategoryId, UserProfileId) values (3, 'Jordan’s High School Graduation', 'Jordan just walked in his high school graduation ceremony with the UTCH homeschool organization that we’ve been a part of for many years. He graduated with honors in science. He celebrated later with family and good friends.', '2017-06-03', 'https://picsum.photos/200/300', 'Jordan with Mom and Dad', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 2, 1);   

insert into Post (Id, Title, Content, DateCreated, Image1, Caption1, Image2, Image3, Image4, CategoryId, UserProfileId) values (4, '2017 NCFCA Region 3 Qualifier', 'This year’s regional qualifier took place in Grand Junction, Colorado. Isaac was really excited to qualify in Lincoln-Douglas Debate. He ended up placing 6th place. Mom worked in tabulation for this tournament.', '2017-04-01', 'https://picsum.photos/200/300', 'Lincoln-Douglas Debate placings', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 2, 1); 

insert into Post (Id, Title, Content, DateCreated, Image1, Caption1, Image2, Image3, Image4, CategoryId, UserProfileId) values (5, 'Moab and Arches National Park', 'When Mom, Hannah, and I were on our way to the regional qualifier speech and debate tournament, we stopped to spend a day in Moab and also see Arches National Park. We went to Red Cliffs lodge and had the brunch buffet on the deck. Since Shay and Jordan graduated and moved out, if feels a little weird going to tournaments without them. But now Mom can give me all the attention I rightfully deserve.', '2017-04-02', 'https://picsum.photos/200/300', 'Brunch at Red Cliffs Lodge with a view of the river and the red cliffs', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 8, 7);    

insert into Post (Id, Title, Content, DateCreated, Image1, Caption1, Image2, Image3, Image4, CategoryId, UserProfileId) values (6, 'Delia and Rohit’s Wedding in India', 'Shortly after their wedding in Utah, we flew to New Delhi, then Deradun in India for Delia and Rohit’s second wedding ceremony. The Indian wedding was a short 4-day affair. This trip was incredible, and I’ll never forget it. Rohit’s family are lovely and were so gracious and kind. Rohit’s uncle translated the wedding ceremony and other events from Hindi into English for us. Wishing Delia and Ro a lifetime of happiness together!', '2016-11-06', 'https://picsum.photos/200/300', 'Wedding Ceremony', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 12, 1);     

set identity_insert [Post] off 