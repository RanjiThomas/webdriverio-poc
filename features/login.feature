Feature: Checkout Items from Category Pages

  Background:
    Given Guest is in the homepage
    Then Verify guest is "Not Logged In"
    And Guest clicks on Log In option in header
    And Guest logs in with email "ranjithomas1@gmail.com" and password "password"
    Then Verify guest is "Logged In"
    And Clear cart for the user

  Scenario: Guest Checks out 3 items from Marketplace
    When Guest navigates to marketplace
    And Guest previews first item from marketplace
    And Guest adds item to cart from product detail modal
    And Guest previews second item from marketplace
    And Guest adds item to cart from product detail modal
    And Guest previews third item from marketplace
    And Guest adds item to cart from product detail modal
    When Guest navigates to cart page
    Then Verify item count in cart to be "3"
    When Guest removes item "2" from cart
    Then Verify item count in cart to be "2"
    When Guest clicks on checkout button
    Then Verify guest is in address page
    When Guest clicks on next button
    Then Verify guest is in delivery page
