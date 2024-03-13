SELECT * FROM UserProfile;
SELECT * FROM Post;
SELECT * FROM Category;

set identity_insert [Category] on 
insert into [Category] ([Id], [Name]) 
values (11, 'Babies') 
set identity_insert [Category] off

DELETE FROM Post
WHERE id = 9;



