# Azent Backend - University
Simple backend service with REST API for university search.

## Technology

    NodeJS
    NestJS
    MongoDB
    ElasticSearch
    
## Install

    yarn install | npm install 
    
## Run the app on local

    npm run start:dev

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
           ],
          "totalCount": 1 
        }