LOAD CSV WITH HEADERS FROM "file:///school.csv" AS row
CREATE (:School {name: row.name, location: row.location})
