Feature: PrimaryBid Main Page

  I want to open the PrimaryBidPage

  # @focus
  # Scenario: Opening PrimaryBid page with about us
  #   Given I open PrimaryBid page
  #   Then I navigate to "about-us"

  # @focus
  # Scenario: Opening PrimaryBid page with help
  #   Given I open PrimaryBid page
  #   Then I navigate to "help"

  @focus
  Scenario: Opening PrimaryBid page with news
    Given I open PrimaryBid page
    Then I navigate to "news"