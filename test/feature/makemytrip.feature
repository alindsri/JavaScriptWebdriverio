Feature: MakeMyTrip Flight Search

  As a traveler
  I want to search for flights from Delhi to Mumbai on MakeMyTrip
  So that I can see the available flights for my chosen date

  Background:
    Given I launch the MakeMyTrip homepage
    And I maximize the browser window

  Scenario: Search flights from Delhi to Mumbai
    When I click on the Flights tab
    And I select "One Way" trip option
    # And I set the "From" city to "Delhi"
    # And I set the "To" city to "Mumbai"
    # And I select the departure date as "January 20, 2025"
    # And I click the "Search" button
    # Then I should see the list of available flight options