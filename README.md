# Skins Showcase

## Usage

### Prepare environment variables

Copy `.env_example` and create a new file called `.env`.
In `.env`, define all environment variables.

### Commands to run

```
$ git clone https://github.com/meanbeans/skin_showcase.git
$ cd skin_showcase
$ bundle install
$ bin/rails db:create # only for the first time
$ bin/rails db:migrate
```

### Docker

1. [Install Docker](https://docs.docker.com/)
2. Go to the project folder
3. `$ docker-compose build`
4. `$ docker-compose up`
5. `$ docker-compose run web rails db:create`
6. `$ docker-compose run web rails db:migrate`
