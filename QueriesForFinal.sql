CREATE TABLE images (
    img varbinary(max) 
);

CREATE TABLE ImageTable
(
    Id int,
    img varbinary(max) 
)

INSERT INTO ImageTable (Id, img) 
SELECT 1, 'test', BulkColumn 
FROM Openrowset( Bulk 'C:\test.jpg', Single_Blob) as image


 update Products set ProductImage = BulkColumn from Openrowset( Bulk 'F:\Images\image.gif', Single_Blob) as ProductPicture 
 where ProductID='355'