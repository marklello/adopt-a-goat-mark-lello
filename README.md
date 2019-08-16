Adopt a Goat :goat:
===================

This repository contains a bootstrap application featuring a small goat
adoption form. Your task is to structure a framework for a testing suite and
begin to build some basic tests against the application.

#### Instructions for Setup and Running

- You can clone/download the project from my public github project page below
- https://github.com/marklello/adopt-a-goat-marklello

- The automation was built on protractor (https://www.protractortest.org/#/) which 
    runs off of selenium webdriver
- Once you have the project opened in your IDE, open a terminal window

- SETUP
    - You must have JDK installed on your machine (https://www.oracle.com/technetwork/java/javase/downloads/index.html)
    - You must have node.js installed on your computer (https://www.npmjs.com/get-npm)
        - Go to the site above and download the recommended version (https://nodejs.org/en/)
    - Use npm to install Protractor globally with: 
        - "npm install -g protractor"
            - If you run into permissions issues you can run the following command workaround:
                - "sudo chown -R $USER /usr/local/lib/node_modules"
        - This will install two command line tools, protractor and webdriver-manager. 
        Try running "protractor --version" to make sure it's working.
    - The webdriver-manager is a helper tool to easily get an instance of a Selenium 
    Server running. Use it to download the necessary binaries with:
        - "webdriver-manager update"
    - Now start up a server with:
        - "webdriver-manager start" (selenium server will start and run on a local port)
        
    - To run the automation suite (via the config file) you must run the config file command from
      the directory it is located (./adopt-a-goat-marklello/). So change your terminal/command line
      directory to that location
    - Additionally open the index.html file within the project location folder. Since this project
      is ran locally from a file instead of an environment we must copy it into my test file. 
      Copy that URL into the adoptAGoatForm.spec.js file in the beforeEach function (likely line 21).
      Your line will look something like browser.get('file:///Users/marklello/WebstormProjects/adopt-a-goat-marklello/index.html');
    
    - Now let's do the final step and run the automation:
        - The command is "protractor conf.js" 

#### Requirements

- Structure a testing suite using Selenium (you may use the programming language
  of your choice).
- Add one test that validates the form's happy-path (i.e. submitting it
  successfully without errors).
- Add one test that validates appropriate user feedback when an error occurs
  that prevents happy-path submission.
- Add TODOs and comments that define the specifications for tests that would
  highlight edge cases and incorrect inputs.
- Update or include a new README with instructions on how to run the test suite


#### Guidelines

- Open `<path-to-project>/index.html` in a browser to view the adoption form.
- `*` Denotes a required field.
- Tests should automate filling out the form.
- Submitting the form should take users to a confirmation page.
- Completed projects should be packaged and emailed to `devs@logicgate.com`.


#### Evaluation

The goal of this exercise is to demonstrate your ability to identify points of
failure in a web application and design tests to validate appropriate
functionality. We are looking for problem solving and meticulous thinking
above proficiency in any particular programming language. As such, the verbal
TODOs that outline future tests are just as important as the actual tests that
you create.

We will also be evaluating the organizational structure of your test suite.
Clean code and attention to reusability goes a long way.

Don't hesitate to leave comments that explain your thought process. The more we
understand your thought process the easier it is to follow your submission.
Also, if you find yourself stuck or the instructions seem unclear please reach
out to `devs@logicgate.com` with questions.


#### References

- [Selenium](https://www.seleniumhq.org/)
- [Backyard Goat](http://www.vetstreet.com/our-pet-experts/want-a-backyard-goat-10-things-to-consider)
- [Goat Companions](https://www.hobbyfarms.com/keeping-goats-as-companions/)
