# Encapsulation

***Fighting public enemy #1***

## Thinking about Software Architecture

* Lots of projects, yet always a similar story
  * Everything starts off fast!  Easy!  Simple!
  * Things get slow, difficult, confusing…
* Big questions
  * Why do projects get harder to work on?
  * What makes code easy to read?
  * What makes code easy to change?
  * What makes code easy to test?
* How are large systems structured?
  * How do distributed systems interact?
  * What are front-end architectural patterns?
  * What are back-end architectural patterns?
* Read lots of books
  * Architecture, Domain Driven Design, CQRS, Event Sourcing, Clean Code, etc.
  * Each author gives the same advice in various ways

It gets really hard to go back and read code from even a week ago.

You find some really terrible code, and want to yell at whomever wrote it.  And then you read the git blame, and realize it was you.

The whole point of software is that it’s easy to change.

Testing is incredibly important to reliability, yet we avoid it

## Hyrum’s Law

> With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody.
>
> - Hyrum Wright

* https://www.hyrumslaw.com/
* **“Software Engineering at Google”** - https://www.oreilly.com/library/view/software-engineering-at/9781492082781/

* If a system works one way, you expect it to continue working that way.
* Given enough time and people
  * All behavior will be noticed, no matter how subtle
  * Someone will write code expecting that behavior

## What are observable behaviors?

* Contract - Interface
  * API - Classes, functions, parameters, constants, etc.
  * Rest or gRPC schema
  * UI - Workflows, button placement, verbiage, colors, etc.
* Pure Functions
  * For each input, there is an expected output
* Side effects - Things that change between calls
  * Class field mutation
  * Global variable mutation
  * Databases and external services
* Subtle things…
  * Weird stuff we don’t think about…

## Will someone notice if you change it?

* Sort order
  * Hashes
    * By definition values are unordered
    * JavaScript often implements ordering
    * Other languages randomize on purpose - forces flaky tests
  * Database default order
    * Early on looks like insert order
    * Implementation specific, not stable
    * Important to specify order in queries
  * HTTP endpoints
    * Is order specified by client?
    * If not, is some default order defined?
    * If not, is it using the underlying Database’s default order?
* Errors
  * Not in the API signature (except Java).  Only at runtime.
  * Often analyzed by message string.  Especially over HTTP.
* Time
  * How long does something take?  Will it always take that long?
  * Flaky code with threads sleeping for a few milliseconds
* Race conditions
  * Does event A always happen before event B?
* Procedures
  * Do you have to perform step A before step B?
* Default values
  * If I don’t specify a value, what happens?
* Business rules
  * These are the things we really mean to change
    * Change in requirements
    * Bug fixes
  * What happens if we change it?
    * Surprise downstream consumer?
      * Your React hook for a feature is used somewhere else?
    * The bug became a feature?
      * Catching your exception is part of their logic?
      * Switch statement using your misspelled string?
      * Your math is off, and they’re accounting for it?
* Crazy stories - Reddit has plenty…
  * Automated systems depending on font size
  * Users depending on SQL injection vulnerabilities

## Coupling

* Depending on an observable behavior
  * Using nearby code
  * Using code from elsewhere in the same project
    * Shared code - Expected
    * Feature code - Unexpected…
  * Using a library or service
* Agreement between upstream and downstream
  * Consumers trust that the behavior won’t change
  * Publishers agree not to break their word
  * If changes need to happen, transition will be smooth
* Coupling is a contract
  * Written out or implied
  * If it can be observed, you’re responsible for it…

## What do we do???

* Obscure the contract?
  * Dynamic languages? - Still observable at runtime…
  * Return any? - Still observable at runtime…
  * Return JSON? - Still observable at runtime…
* Dependency injection? - Yes!
  * Code against interfaces and mocks
  * Layered Architecture
    * Critical code is completely separate from dependencies
    * Map external to internal code
* Event Driven Architecture? - Yes!
  * Systems don’t call each other directly
  * Only observe immutable data streams
  * Beware publishing too much…
* Publishers - Manage observability
  * Once you expose something, it’s hard to go back!
  * If something might change, don’t expose it!
  * If something is agreed upon, test it!
* Consumers - Reduce coupling
  * If something might change, don’t depend on it!
* Documentation?
  * Yes, but…
    * Not fully automated
    * Not testable
    * Comments lie…

## Strategies

* What do we need to expose?
  * Enough to make a decision
  * Enough to take action
  * Hide by default
  * Does anyone REALLY need to see it?
    * Every component, hook, function, class, field, method, setter?
    * Internal logic???
    * Mutable public fields???
* Use Test Driven Development
  * Behaviors and tests written at the same time
  * Only implement what you’re testing
    * Missing cases - No way to know if it breaks
    * Brittle tests - testing the wrong things
    * Flaky tests - fail randomly

## Language Support

* C#, Java, Scala, Kotlin, Dart, Go, Rust, etc.
  * Lots of keywords, lots of strategies, so many options
  * Very natural to the language
  * Classes - full support
  * Modules, packages, namespaces, etc. - full support
* TypeScript/JavaScript
  * TypeScript and JavaScript have different keywords…
  * JavaScript only recently supports private fields and methods
  * Classes - full support
  * Modules - tend towards exposing too much…
