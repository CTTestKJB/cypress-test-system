Feature: PrimaryBid Main Page

  I want to open the PrimaryBidPage

  @focus
  Scenario Outline: Opening PrimaryBid page with '<page-type>' and screen type '<screen-type>'
    Given I open PrimaryBid page with screen type '<screen-type>'
    Then I navigate to '<page-type>'

    Examples:
      | screen-type | page-type |
      | macbook-13  | about-us  |
      | macbook-13  | news      |
      | macbook-13  | help      |
      | ipad-2      | about-us  |
      | ipad-2      | news      |
      | ipad-2      | help      |
      | iphone-6    | about-us  |
      | iphone-6    | news      |
      | iphone-6    | help      |


  @focus
  Scenario Outline: validating email and password during signup
    Given I open PrimaryBid page with screen type '<screen-type>'
    Then I navigate to signup page '<screen-type>'
    And I validate email and password

    Examples:
      | screen-type |
      | macbook-13  |
      | ipad-2      |
      | iphone-6    |

  @focus
  Scenario Outline: Fully signup for screen type '<screen-type>'
    Given I open PrimaryBid page with screen type '<screen-type>'
    Then I navigate to signup page '<screen-type>'
    And I validate the full signup process

    Examples:
      | screen-type |
      | macbook-13  |
      | ipad-2      |
      | iphone-6    |