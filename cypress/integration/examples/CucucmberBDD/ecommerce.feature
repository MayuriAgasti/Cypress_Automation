Feature: End to End ecommerce validation
@Regression
Scenario: Ecommerce products delivery
Given I am on Ecommerce login page
When I logged in to the application
And I add items to cart and checkout
And I validate total price limit
Then I select the country submit and verify ThankYou

@Smoke
Scenario Outline: Ecommerce Products Delivery DataDriven
Given I am on Ecommerce login page
When I logged in to the portal
|userName           | password  |
|rahulshettyacademy | learning  |
And I add items to cart and checkout
And I validate total price limit
Then I select the country submit and verify ThankYou