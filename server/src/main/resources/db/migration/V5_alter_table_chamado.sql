ALTER TABLE chamado 
ADD COLUMN titulo VARCHAR(255) NOT NULL,
ADD COLUMN foto_antes_url VARCHAR(255),
ADD COLUMN foto_depois_url VARCHAR(255);

ALTER TABLE chamado 
ALTER COLUMN descricao SET NOT NULL,
ALTER COLUMN secretaria DROP NOT NULL,
DROP COLUMN foto_url;
