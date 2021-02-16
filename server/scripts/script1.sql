/****************************************************************************
 *					Estruturação do banco de dados          				*
 ****************************************************************************
 * Autor: Alessandro Albergaria												*
 ****************************************************************************/

-- Verifica se a tabela Page existe, se não ela é criada
IF NOT EXISTS (SELECT 1
			   FROM Sys.Schemas
			   INNER JOIN Sys.Objects
			   ON Schemas.Schema_id = Objects.Schema_id
			   WHERE Schemas.Name = 'dbo'
			   AND Objects.Name = 'Page')
BEGIN
	CREATE TABLE Page
	(
		Id					INT					NOT NULL IDENTITY(1,1),
		Name				VARCHAR(255)		NULL,
		Url					VARCHAR(255)		NULL,
		Published			BIT					NULL
		CONSTRAINT PK_Page_Id					PRIMARY KEY (Id)
	)
END

GO

-- Verifica se a tabela Setting existe, se não ela é criada
IF NOT EXISTS (SELECT 1
			   FROM Sys.Schemas
			   INNER JOIN Sys.Objects
			   ON Schemas.Schema_id = Objects.Schema_id
			   WHERE Schemas.Name = 'dbo'
			   AND Objects.Name = 'Setting')
BEGIN
	CREATE TABLE Setting
	(
		Id					INT					NOT NULL IDENTITY(1,1),
		PageId				INT					NOT NULL,
		Title				VARCHAR(255)		NULL,
		Description			TEXT				NULL,
		Linguage			VARCHAR(255)		NULL
		CONSTRAINT PK_Setting_Id				PRIMARY KEY (Id),
		CONSTRAINT FK_Setting_Page_PageId		FOREIGN KEY (PageId)	REFERENCES Page(Id)
	)
END

GO

-- Verifica se a tabela Tag existe, se não ela é criada
IF NOT EXISTS (SELECT 1
			   FROM Sys.Schemas
			   INNER JOIN Sys.Objects
			   ON Schemas.Schema_id = Objects.Schema_id
			   WHERE Schemas.Name = 'dbo'
			   AND Objects.Name = 'Tag')
BEGIN
	CREATE TABLE Tag
	(
		Id					INT					NOT NULL IDENTITY(1,1),
		PageId				INT					NOT NULL,
		Name				VARCHAR(255)		NOT NULL,
		CONSTRAINT PK_Tag_Id					PRIMARY KEY (Id),
		CONSTRAINT FK_Tag_Page_PageId			FOREIGN KEY (PageId)	REFERENCES Page(Id)
	)
END

GO