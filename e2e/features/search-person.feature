Feature: Search for a Star Wars character

    Scenario: By full name
        Given I navigate to "localhost"
        When I search for name "Luke Skywalker"
        Then I see Lukes details 

    Scenario: By invalid name
        Given I navigate to "localhost"
        When I search for name "Nidhi"
        Then I see not found in details

    Scenario: Progressive search
        Given I navigate to "localhost"
        When I search for name "L"
        Then I see 10 results for "people"
        When I search for name "Lu"
        Then I see 2 results for "people"
        When I search for name "Luk"
        Then I see 1 result for "people"
  
    Scenario: Search by a name that provides multiple results,then clearing the search box and see user details are visible which is a BUG 
       Given I navigate to "localhost"
       When I search for name "Darth" 
       Then I see 2 results for "people"
       When I clear the search box and tap enter again
       Then I see not found in details


   Scenario: Search by a name that provides multiple results of people and then switching on planet tab and see no results
       Given I navigate to "localhost"
       When I search for name "Darth"
       Then I see 2 results for "people"
       Then  I switch to planet tab and tap enter again
       Then I see not found in details
