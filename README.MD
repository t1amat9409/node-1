# NODE TEST

## Section 1 - 
### 1) Explain the difference between an abstract class and an interface.

- **Abstract** : An abstract class is any class that have at least one abstract method in it, these abstract methods can't be implemented by a subclass, and also the class it's see cannot be instantiated, but extended.

  **Interface** : An Interface serves as a template for a class, it only contains abstract methods, and is implemented by a child class and all it's methods can be overriden by the child class.
  
### 1) What is the purpose of getters and setters in a class?

- **Getters** and **Setters** in a class allows for safe property accessing or editting, with Getters being used to read class properties without directly making a reference to, and Setters used to set property value without direct access to the property.

## Section 2 - Testing
### 1) Explain the purpose of black box testing
- I am not familiar with this concept : But I read, it includes unit testing, which can be seen or described as a virtual form of testing of what/how the program is expected to run.

### 2) In your opinion what are the benefits of test cases?

- I think, runinng tests to a program can help predict how the program may perform/fail at runtime, thus giving a benifit to counter the possibly crashes or issues that can be expected by the program.

## Section 3 - NodeJS specific questions
### 1) What is an error first callback, and what is the reason for this pattern existing?

- An Error-First callback pattern is a convertion where a possible error is to be expected before the data return by an operation. It exists, because, ***I think*** since some error may be at runtime, this allows for the program to perform necessary action should a fatal error occur on an operation that was run, which would allow for the program not to crash or affect the rest of it's services that aren't linked to the current operation.

### 2) Explain the difference between fs.readSync and fs.read
- ***fs.read(...args)*** : is a non-block execution, it takes a callback function that performs further tasks once the reading of data as been finished, allowing code execution of operation that follow after this to execute without waiting for the data to resolve.
- ***fs.readSync(...args)*** : reads data synchronously while blocking code execution until the operation is finished.

### 3) What tasks do you feel should be done asynchronously?
- Mostly background tasks, but also any task that it's return value is not high in importancy, like update table or files that are not needed in the return data of the current execution, but will need to be updated by during the operation.

## Section 4 - NodeJS coding
- See ***load_contents.js*** file
