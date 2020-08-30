#!bin/bash

# bulk load data
 mongoimport -h ds059516.mlab.com:59516 -d heroku_25x6mgqv --collection=items -u heroku_25x6mgqv -p vo36p21hbavsoh0ipnbff1dph7 --mode=upsert --upsertFields=name --type=csv --headerline --file=daniel_data.csv --ignoreBlanks
