#!/bin/bash

API="http://localhost:4741"
URL_PATH="/schools"
NAME="TEST SCHOOL"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "school": {
      "name": "'"${NAME}"'"
    }
  }'

echo
