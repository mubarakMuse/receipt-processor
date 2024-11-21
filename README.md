# Receipt Processor API

## Run Instructions

### Without Docker
1. Install Node.js and npm.
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Run `node app.js` to start the server.
5. The API will be available at `http://localhost:3000`.

### With Docker
1. Build the Docker image: `docker build -t receipt-processor .`
2. Run the container: `docker run -p 3000:3000 receipt-processor`.
3. The API will be available at `http://localhost:3000`.

## Endpoints

### POST /receipts/process
- Accepts a JSON receipt and returns a unique ID.

### GET /receipts/:id/points
- Returns the points awarded for a receipt.

## Example Requests
See the problem statement for example payloads and expected responses.
