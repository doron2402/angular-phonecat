#!/bin/sh

set -ex

<<<<<<< HEAD
cleanUp () {
=======
function cleanUp() {
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
  kill $WEBSERVER_PID
  git checkout -f $BRANCH
}

trap cleanUp EXIT

# Define reasonable set of browsers in case we are running manually from commandline
if [[ -z "$BROWSERS" ]]
then
  BROWSERS="Chrome"
fi

if [[ -z "$BROWSERS_E2E" ]]
then
  BROWSERS_E2E="Chrome"
fi

ROOT_DIR=`dirname $0`/../..

cd $ROOT_DIR
BRANCH=$(git rev-parse --abbrev-ref HEAD)
<<<<<<< HEAD

# Ensure that all the dependencies are there
npm install

# Ensure that the chromeDriver is installed
npm run update-webdriver
=======
npm install

./scripts/web-server.js > /dev/null &
WEBSERVER_PID=$!

# Steps 0 and 1 do not have any tests - but going to step 0 copies useful files
# Step 2 only has unit tests
git checkout -f step-2
./node_modules/karma/bin/karma start config/karma.conf.js --single-run
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01

# Start up the web server
node_modules/.bin/http-server -p 8000 &
WEBSERVER_PID=$!

# Run the unit and e2e tests
for i in {0..12}
do
  git checkout -f step-$i

<<<<<<< HEAD
  node_modules/karma/bin/karma start test/karma.conf.js --single-run --browsers=$BROWSERS
  node_modules/.bin/protractor test/protractor-conf.js --browser=$BROWSERS_E2E
=======
  ./node_modules/karma/bin/karma start config/karma.conf.js --single-run --browsers $BROWSERS --reporters=dots --no-colors --no-color
  ./node_modules/karma/bin/karma start config/karma-e2e.conf.js --browsers $BROWSERS_E2E --reporters=dots --no-colors --no-color
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01

done