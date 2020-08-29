#!bin/bash

# bulk load data
 mongoimport --db=educational-store-development --collection=items --mode=upsert --upsertFields=name --type=csv --headerline --file=daniel_data.csv --ignoreBlanks