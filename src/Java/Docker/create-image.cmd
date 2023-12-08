docker build --no-cache -f SQL\Dockerfile.PostgreSql -t parkomat-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t parkomat-java/app ../../..
