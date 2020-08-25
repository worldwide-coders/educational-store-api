#!/bin/bash

API="http://localhost:4741"
URL_PATH="/schools"

NAME="TEST SCHOOL"
STREET='123 Awesome street'
CITY='Springfield'
ZIPCODE='12345'
STATE='AL'

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "schools": {
      "name": "'"${NAME}"'",
      addressLineOne: "'"${STREET}"'",
      addressCity: "'"${CITY}"'",
      addressZipCode: "'"${ZIPCODE}"'",
      addressState: "'"${STATE}"'",
    }
  }'

echo
