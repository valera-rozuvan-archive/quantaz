#!/bin/bash

cd ./server
rm -rf ./dist
npm run build
cd ../client
rm -rf ./api
mv ../server/dist ./api
cd ../
echo "Done!"

exit 0
