# TripTo

## Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
  - [1. Start a Local PostgreSQL Database](#1-start-a-local-postgresql-database)
  - [2. Set Up Your Environment Variables](#2-set-up-your-environment-variables)
  - [3. Initialize Your Local Database](#3-initialize-your-local-database)
  - [4. Start the Local Development Server](#4-start-the-local-development-server)
- [Contributing](#contributing)
- [License](#license)

## Introduction

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Docker](https://docs.docker.com/get-docker/) installed on your local machine
- [Node.js](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/) installed on your local machine

## Local Development Setup

Follow these steps to set up the project for local development:

### 1. Start a Local PostgreSQL Database

To start a local PostgreSQL database using Docker, run the following command in your project directory:

```sh
docker-compose up -d
```

This command will start the PostgreSQL service in the background using the `docker-compose.yml` file provided in the project.

### 2. Set Up Your Environment Variables

Set up your local environment variables by copying the `.env.example` file to a new file named `.env`. You can do this with the following command:

```sh
cp .env.example .env
```

### 3. Initialize Your Local Database

Once the PostgreSQL database is up and running, initialize your local database schema using Prisma migrations. Run the following command:

```sh
yarn prisma migrate deploy
```

This command will apply all pending migrations to your local database, ensuring it is up-to-date with the latest schema.

### 4. Start the Local Development Server

Finally, start the local development server with the following command:

```sh
yarn dev
```

This command will start the development server, and you can access your application at `http://localhost:3000`.

## Contributing

We welcome contributions to TripTo! If you have any suggestions, bug reports, or feature requests, please open an issue on GitHub. For major changes, please open a pull request and describe your changes in detail.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this README further based on the specifics of your project and development environment.