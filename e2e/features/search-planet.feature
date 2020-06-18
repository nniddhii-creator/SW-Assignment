Feature: Search for a Star Wars planet

    Scenario: By full valid name
        Given I navigate to "localhost"
        When I search for planet name "Hoth"
        Then I see Hoth details

    Scenario: By  invalid name
        Given I navigate to "localhost"
        When I search for planet name "Henry"
        Then I see not found in details


 Scenario: Progressive search planet
        Given I navigate to "localhost"
        When I search for planet name "H"
        Then I see 10 results for "planet"
        When I search for planet name "Ho"
        Then I see 3 results for "planet"
        When I search for planet name "Hot"
        Then I see 1 result for "planet"