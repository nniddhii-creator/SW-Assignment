
# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: Nidhi Jalhotra +31639723239

## Remarks

- Path to feature file was wrong in protractor config. Updated it.
- 'protractor-cucumber-framework' was missing. Added it to package.json using command:
``npm install --save-dev protractor-cucumber-framework``
- Updated the path to 'protractor-cucumber-framework' in protractor config as the framework is 'custom'.
- Updated the path to cucumberOpts format json as it expects the folder to be present.
So moved the results json to main folder.
- Added common steps for some of the steps in the feature.
- Moved timeout to timeout.ts. So we do not need to add this in every step.

# POSITIVE Test cases
- Search Character - By Valid name, By invalid name, Progressive search, 
- Search character by a name that provides multiple results of people and then switching on planet tab and see no results

- Search Planet - By Valid name, By invalid name, Progressive search, 
- Search planet by a name that provides multiple results of people and then switching on planet tab and see no results

# NEGATIVE Test cases
-  Search by a name that provides multiple results,then clearing the search box and see user details are visible which is a BUG. it will FAIL while running.
