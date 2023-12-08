docker build --no-cache -f SQL\Dockerfile.PostgreSql -t parkomat/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t parkomat/app ../..
