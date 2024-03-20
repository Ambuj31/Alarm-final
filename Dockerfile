FROM neo4j:latest

# Copy your CSV file into the Docker container
COPY D:/AMBUJ/AMBUJ/COLLEGE/GG/alarm-demo-main/Database/school.csv /var/lib/neo4j/import/

# Run Cypher query to import data during container initialization
COPY import.cypher D:/AMBUJ/AMBUJ/COLLEGE/GG/alarm-demo-main/DockerFile/import.cypher
RUN echo "bin/neo4j-admin import --database=neo4j --id-type=INTEGER --nodes:School /var/lib/neo4j/import/school.csv" > /docker-entrypoint-initdb.d/import.sh
