# REEF Total Supply API

This is a simple Node.js application that provides an API endpoint to fetch the total supply of the REEF token using the Reef EVM provider.

## Features
- Connects to the Reef mainnet via WebSocket
- Fetches total supply from the REEF smart contract
- Provides an HTTP endpoint to get the total supply

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/anukulpandey/reef-total-supply-api
   cd reef-total-supply-api
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

## Running the Application

Start the server with:
```sh
yarn start
```

## API Endpoint

### `GET /total-supply`
Returns the total supply of the REEF token in a formatted way.

#### Example Response:
```json
"21231521996.293538143221396516"
```

## Error Handling
If there is an error while fetching the total supply, it returns `0` and logs the error.

## License
MIT

