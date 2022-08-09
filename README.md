## Simple Nestjs Api Microservice communication via Kafka

## Description

Nestjs Monorepo with 2 services and a api gateway, gateway recieves http requests and comunicate with services via Kafka.

## Installation

```bash
yarn install
```

Run a Kafka Instance, i recomend kafdrop (https://github.com/obsidiandynamics/kafdrop)
Go to docker-compose/kafka-kafdrop and run docker-compose up --build



## Running the app

After your kafka is running, run all 3 services (api-gateway, auth, billing)
All from root directory
```bash
# api-gateway
yarn gateway:start:dev

# auth
yarn auth:start:dev

# billing
yarn billing:start:dev
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Documentation

For testing Import file Insomnia.json into Insomnia

Endpoint GET / - Health Check
Returns
```
{
  status: "OK"
}
```

Endpoint POST / - Billing Order
Body
```
{
	"userId": "string",
	"price": number
}
```
User id for testing: "123" and "345"

Returns
```
{
	"status": "SENT"
}
```