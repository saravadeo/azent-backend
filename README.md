# Azent Backend - University
Simple backend service with REST API for university search. On application start, service automatically create data
if data not found in a database.

## Technology

    NodeJS
    NestJS
    MongoDB
    
## Install

    yarn install | npm install 
    
## Run the app on local

    npm run start:dev
*Note: Update `resources/config-dev.properties` depending on your local configurations

## Build the app

    npm run build

# REST API

The REST API to the University app is described below.

## Get university list

### Request

`GET /university`

Query Params
    
        pageNumber: <<number>>,
        pageSize: <<number>>
        name: <<string>> - University name search term,
        domain: <<string>> - Domain extension for filter,
        countryCode: <<string>> - Country code for filter
    
### Response

        {
          "status": "success",
          "universities": [
            {
              "_id": "5ec0085d681ca3173ef5f5e4",
              "alpha_two_code": "US",
              "country": "United States",
              "domain": "acu.edu",
              "web_page": "http://www.acu.edu/",
              "name": "Abilene Christian University",
              "created_at": 1589643357450,
              "created_by": "SCRIPT",
              "__v": 0,
              "university_id": "5ec0085d681ca3173ef5f5e4",
              "id": "5ec0085d681ca3173ef5f5e4"
            },
            ..
           ],
          "totalCount": 1.. 
        }
        
## Get domain extension list

### Request

`GET /university/domain-extensions`

### Response

        {
          "status": "success",
          "domainExtensions": [
            {
              "_id": ".ab.ca"
            },
            {
              "_id": ".ac"
            },
            ...
          ]
        } 
        
## Get country code list

### Request

`GET /university/country-codes`

### Response

        {
          "status": "success",
          "countryCodes": [
            "US",
            ...
          ]
        }
        
## Get Metatag details for URL

### Request

`GET /scrap`

Query Params

        url: <<string>>,

### Response

        {
          "ogImage": {
            "url": "https://www.adelphi.edu/wp-content/themes/adelphi.edu/img/facebook.gif?t=1500923331-9942-b",
          },
          "ogTitle": "Adelphi University | Higher Education College on Long Island, NY",
          "ogDescription": "Learn more about Long Island's oldest university for master's and bachelor’s degrees. Named best college by Princeton Review - Adelphi University."
        }
