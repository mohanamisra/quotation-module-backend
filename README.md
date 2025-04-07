# Quotation Module Backend

## Database Architecture

### Why MongoDB?
The quotation module backend uses MongoDB as its database. It's a cross-platform document database (NoSQL) which stores documents in a JSON-like format. We used MongoDB over other solutions because its simplicity and intuitiveness makes for a great quick solution in an assignment-based project as this, but its scalability guarantees that you don't have to change your database if the project happens to grow in size.

### Schema Design
#### Collection: `Quotations`

Each document in this collection represents a single quotation.

#### Document Structure: `Quotation`

```json
{
  "client_name": "String",
  "expiry_date": "Date",
  "currency": "String",
  "parts": [
    {
      "part_name": "String",
      "moq": "int",
      "prices": [
        {
          "qty": "int",
          "unit_price": "double"
        }
      ]
    }
  ]
}
```
#### Data Flow
Data can be added to the database through:
- an HTTP POST request that uploads a new quotation to the database
- an HTTP PATCH request that updates an existing quotation in the database in any form except the MongoDB system-assigned `_id` field

Data can be accessed from the database through:
- An HTTP GET request to get all quotations currently existing in the database
- An HTTP GET request to get an individual quotation by its ID (the MongoDB system-provided `_id`)

Data can be removed from the database through:
- An HTTP DELETE request to delete an individual quotation by its ID (the MongoDB system-provided `_id`)  
***

### API Endpoints

- To GET all quotations
```bash
https://quotation-module-backend.onrender.com/quotations
```
- To GET any one quotation
```bash
https://quotation-module-backend.onrender.com/quotations/<QUOTATION_ID>
```
- To CREATE a new quotation
```bash
https://quotation-module-backend.onrender.com/quotations
# BODY OF THE REQUEST SHOULD BE A PROPERLY FORMATTED QUOTATION
```
- To UPDATE an existing quotation
```bash
https://quotation-module-backend.onrender.com/quotations/<QUOTATION_ID>
# BODY OF THE REQUEST SHOULD BE A PROPERLY FORMATTED QUOTATION WITHOUT THE _id FIELD
````
- To DELETE an existing quotation
```bash
https://quotation-module-backend.onrender.com/quotations/<QUOTATION_ID>
```  
***

### Devlog: To-Do List
- [X]  Setup NestJS for backend
- [X]  Connect Backend to DB
- [X]  Design DB Schema
- [X]  Add dummy data to DB
- [X]  Check CRUD API endpoints in DB with Postman
- [X] Get All API endpoint
- [X] Post Quotation API endpoint
- [X] Update Quotation API endpoint
- [X] Integrate backend with frontend
- [X] Implement 3rd party api endpoint
- [X] Deploy backend
- [X] Code clean-up + documentation
- [X] README documentation preparation + DB structure documentation