# Dictionary

This dictionary grew out of an effort to define any terms I did not understand. Some of the terms herein are pretty basic, but as they say, one has to start somewhere.

Feel free to create an issue or open a pull request if a term is incorrect or you want to add more.

Also, please star this repository if you find it useful. Thanks!

## Author & Copyright

Jake Knerr © Ardisia Labs LLC

## Structure

Term definitions are grouped by the first letter in the term, just like in a standard dictionary.

The first sentence of the definition is the _summary_. The summary has an implied subject that is the term being defined and concisely answers the question, "What does [insert term here] mean?" Also, the summary may be a sentence fragment. Any further sentences in the definition are complete sentences.

## Good Sources

- See the [The Jargon File](http://www.catb.org/~esr/jargon/html/go01.html) for definitions of many terms in hacker culture.

## Terms To Be Added

-

## Index

[A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

---

## A

#### A Duck

a software feature added merely to draw attention, be noticed by management, and ultimately be removed.

Ducks are used to satisfy management's need to exert influence and avoid changes to other parts of the software.

#### Abstract Class

a class that can only be extended or subclassed but not instantiated.

#### Abstract Data Type (ADT)

a data type that describes how to manipulate its data but does not describe the implementation.

A `List` is an ADT, and an `ArrayList` is a concrete implementation. Think of an ADT as an interface for the data type.

See [data structure](#data-structure).

#### Abstract Method

a method that is declared but contains no implementation.

#### Abstract Syntax Tree (AST), Syntax Tree

a tree representation of structured data.

The syntax is _abstract_ because it does not represent every detail appearing in the data. For example, if an AST represented JavaScript source code, semicolons would be dropped because they are unnecessary to understand the data.

See [concrete tree](#concrete-tree-parse-tree).

#### Abstraction

simplification by focusing on details of greater interest in a given context and ignoring everything else.

Put another way, the goal of abstraction is to reduce complexity by removing unnecessary information. An interface to a complex system is an abstraction.

Put more concretely, abstraction allows for a name to represent a complex operation and allows a developer to ignore how the operation is achieved and focus on what the operation does.

The higher the level of abstraction, the less detail in the representation. For example, when traveling from point A to point B, a high-level abstraction focuses on driving directions. In contrast, a low-level abstraction would include details on the car's engine temperatures while traveling from A to B.

As a verb, _abstract_ means to take away. An abstraction is the simpler set of ideas that are abstracted from a more complex set of ideas. It is useful to think of abstraction as a verb because it emphasizes how something less complex is taken from something that is more complex.

See [generalization, specialization](#generalization-specialization).

#### Acceptance Testing, Customer Testing, Functional Testing

testing to determine if the system complies with the requirements of the project and whether it can be delivered.

This is the last phase of software testing before making the system available for client use.

#### Access Control

a feature of classical OOP that determines how an object's properties can be accessed via keywords like `public`, `private`, `protected`, etc.

#### Accessor Method, Getter

simply reads data and does not change data.

See [mutator method](#mutator-method-setter).

#### Accumulator

a variable used to store intermediate results — for example, a variable in a loop that is added to in successive iterations.

```javascript
for (let i = 0; i < 10; i++) {} // i is the accumulator
```

#### Architecture vs. Design

architecture is concerned with the design of software in the broadest sense. Think layers and high-level modules and how they interact with one another. Changes to architecture generally cause changes to the entire codebase.

Design is more localized and affects a smaller and more specific part of the application. Changes to design may not trigger application-wide changes.

#### Action Comment

a type of comment that signals the need for some action to be taken.

For example, "rewrite code below" is an action comment.

#### Acyclic

literally, not forming a cycle.

In programming terms, it acyclic generally means no looping.

#### Ada

a compiled and strongly typed language that extends Pascal and other languages.

Ada was first designed in 1980 by Frenchman Jean Ichbiah and is named after Ada Lovelace.

See [Ada Lovelace](#ada-lovelace).

#### Ada Lovelace

considered by many to be the world's first software programmer.

Born 1815 in London, Ada was the daughter of the famous poet Lord Byron.

#### Agile Software Development

very generally, an iterative approach to software delivery that builds software incrementally from the start of the project instead of trying to deliver it all at once near the end.

The "Agile Manifesto" introduced the term in 2001 after a conference of 17 developers. Scrum & Extreme Programming are two typical examples.

#### Algebra Laws: Associative, Commutative, Distributive, Identity

- Associative.
  - Addition and multiplication only.
  - `(a + b) + c = a + (b + c)`
  - `(a × b) × c = a × (b × c)`
- Commutative.
  - Addition and multiplication only.
  - `a + b = b + a`
  - `a × b = b × a`
- Distributive.
  - Addition and subtraction in parentheses only.
  - `a × (b + c) = a × b + a × c`
- Identity.
  - `a = b`

#### Algorithm

a series of steps to solve a problem.

#### Aliasing

assigning multiple variables to the same value in memory.

#### Allocation, Heap Based Memory Allocation, Memory Allocation

process by which a computer allocates memory for a program.

#### Anemic Objects, Anemic Domain Model

domain objects that have little or no behavior.

Anemic objects are pure data objects (or nearly pure). Some people consider them an antipattern because they go against the tenet of OOP that objects encapsulate data and behavior rather than just data.

#### Annotations

metadata in code that does not directly affect the code but can be used by a compiler.

For example, JSDoc comments in JavaScript code are annotations. Anecdotally, annotations are consumed by a different compiler than the code compiler.

#### Anonymous Function, Lambda Function

a function definition that is not bound to an identifier.

```javascript
(function () {})(); // function has no identifier
```

#### Apache Ant

a scripting tool for creating automated build processes for your project.

Ant is typically used to automate the build process, create documentation, etc. Ant is an abbreviation for _another neat tool_.

#### Application Framework

a framework that contains libraries that provide functionality for many types of applications.

#### Application Programming Interface (API)

a set of rules that programs follow to communicate with one another.

APIs serve as an interface between different programs and allow them to interact.

#### Applicative Functor

a functor that supports an `ap` method; `ap` allows a functor that wraps a function to apply this function to the wrapped value of another functor of the same type.

Often, the `ap` method is used by a functor that wraps a function to get arguments for the function from other functors.

```javascript
// getJSON :: String -> Task

// each getJSON Task monad will deliver an argument to the curry(x, y) function
Task.of(curry((x, y) => {})).ap(getJSON(./a.js)).ap(getJSON(./b.js));
```

#### Architectural Frameworks

a framework that provides guidance when implementing an architectural pattern within a software system.

#### Architectural Pattern

guidance for solving a repeatable problem in software architecture.

These patterns generally refer to a broad description rather than a concrete implementation. Architectural patterns have a large impact on the codebase. The Model-View-Controller (MVC) pattern is an example of an architectural pattern.

#### Architecture Astronauts

developers who spend their energy on architecture instead of writing code.

#### Arguments

the values passed to an invoked function.

Do not confuse arguments with parameters, which are the variables listed as part of a function definition.

```javascript
function fn(x, y) {} // parameters x and y

fn(1, 2); // fn called with arguments 1 and 2
```

#### Arity

the number of arguments a function accepts.

A function's arity could be none, one (unary), two (binary), or more (polyadic).

See [variadic function](#variadic-function).

#### Array

a data structure that is a collection of elements that can be identified by an index.

#### asm.js

a strict subset of JavaScript that improves performance by limiting the language to constructs that are easier to optimize for performance.

asm.js is compiled to, not handwritten. Much of the performance gain is due to strict type consistency and no garbage collection.

#### Aspects

a modularized cross-cutting concern is called an _aspect_.

See [aspect-oriented programming](#aspect-oriented programming-aop)

#### Aspect-Oriented Programming (AOP)

aspect-oriented programming provides techniques to compose aspects.

#### Assembly Language (ASM), Assembler Language, Symbolic Machine Code

a low-level computer language that is specific to a particular computer architecture.

#### Assertion, Assert Statement

a statement that tests if a condition that is expected to be true is actually true.

#### Association for Computing Machinery (ACM)

the world's largest scientific and educational computing society.

The organization is based in New York City.

#### Asymmetric Key Algorithm, Public-Key Cryptography

cryptography that uses two keys: a public and private key.

The public key can be freely available, while the private is secret, just like symmetric cryptography. TLS/SSL both use this algorithm.

#### Atomic Operation

an operation that appears to complete in a single step.

#### Atomicity, Consistency, Isolation, Durability (ACID), ACID Compliance

the general requirements for a database transaction system.

ACID compliance ensures the validity of a database in case of errors.

#### Atwood's Rule

coined by Jeff Atwood, the creator of Stack Overflow, "Any application that can be written in JavaScript, will eventually be written in JavaScript."

#### Auto-Boxing, Boxing, Boxed

the process by which languages, including JavaScript, will automatically convert a primitive type into an object type to access its methods.

An example in JavaScript is `"abc".length`. The string `"abc"` is automatically boxed to provide the `length` property on the wrapper object.

#### Automated Test Framework, Testing Harness

a collection of software and test data configured to test a program.

Test harnesses automate tests.

#### Automatic Semicolon Insertion (ASI)

the process by which JavaScript adds semicolons to the end of code lines when the semicolon is omitted.

As a general rule, newlines trigger ASI.

**[⬆ back to index](#index)**

## B

#### B-Tree

similar to a binary search tree, but nodes can have more than two children.

Databases and file systems typically use B-trees. The meaning of _B_ is unclear.

#### Baklava Code

code with too many layers.

#### base64

a binary to text encoding scheme.

Base64 converts binary data to a string that has 64 different ASCII characters. These encodings are websafe, but they add 33% to the size of binary data.

#### Bash

default Unix shell for many versions of Linux and OSX.

Bash is a command processor.

#### Bean, Java Bean

without getting too specific, a simplified type of class in the Java language.

#### Behavior Driven Development (BDD)

testing that requires that tests are specified in terms of how the software should behave.

BDD is a more specific version of test-driven development.

#### Bezier Curves, Bézier Curves

commonly used in vector graphics, they model smooth curves.

A series of control points define bezier curves.

#### Bicrement

adding two to a variable.

#### Bidi Algorithm, Bidirectional Algorithm

rules used by browsers to render text in the given direction.

The bidi algorithm is used for left to right and right to left languages.

#### Big O Notation, Big-O, O(N), Complexity

approximates how long an algorithm will take relative to the input.

O(n) means that the run-time will grow in proportion to the size of the input. O(1) means that the algorithm is static or constant; in other words, the complexity stays the same no matter the inputs. O(n^2) means that the run-time will grow in proportion to the square of the size of the input. The growth rate is the _order_ of the algorithm.

#### Bike Shedding, Parkinson's Law of Triviality

spending a disproportionate amount of time on insignificant details.

#### Binary Data

data that can only take on two possible states: zero and one.

#### Binary Function

a function that takes two arguments.

#### Binary Operator

operates on two operands and manipulates them to return a result.

For example, `1 + 1` where `+` is the binary operator.

#### Binary Search Tree (BST), Ordered Binary Tree, Sorted Binary Tree

a node-based data structure in which each node has no more than two child nodes.

Each child must either be a leaf node or the root of another binary search tree. The left subtree contains only nodes with keys less than the parent node; the right subtree contains only nodes with keys greater than the parent node.

#### Bindings

a binding is a general term for the association of an identifier with a value in memory.

See [reference](#reference).

#### Bit

a unit of information that can take on only two possible states: 0 and 1.

The term bit is a portmanteau of binary digit.

#### Bitmap Graphics, Raster Graphics

images defined by a grid of specific pixels.

#### Bitwise AND

an operation that takes two binary numbers and compares each corresponding bit by multiplying them.

Thus, the resulting bit is `0` unless each input bit is `1`. Bitwise AND is useful to quickly determine if a number is even or odd by applying `& 1`. Example: `0101 & 0001 = 0001` is _odd_. The `&` operator in JavaScript.

#### Bitwise LEFT-SHIFT

an operation that takes a binary number and shifts the bits left n times.

This operation is equivalent to multiplying by 2^n. The `<<` operator in JavaScript.

#### Bitwise NOT

an operation that takes a binary number and changes its bits: Bits that are `0` become `1`, and those that are `1` become `0`.

Example: `NOT 1100 = 0011`. The `~` operator in JavaScript.

#### Bitwise OR

an operation that takes two binary numbers and compares each corresponding bit by setting the resulting bit to `0` only if both input bits are also `0`.

The `|` operator in JavaScript.

#### Bitwise RIGHT-SHIFT

an operation that takes a binary number and shifts the bits right n times.

This operation is equivalent to division by 2^n and rounding toward zero. The `>>` operator in JavaScript.

#### Bitwise XOR

an operation that takes two binary numbers and compares each corresponding bit by setting the resulting bit to `1` only if a single input bit is set to `1`.

Example: `0101 ^ 0011 = 0110`. The `^` operator in JavaScript.

#### Black Box Testing, Specification Based Testing

testing an application without analyzing the implementation, thus a black box.

Generally, considered superior to white box testing because the implementation can change, but the test will not need to.

#### Blackboard System

a problem-solving technique where a shared knowledge base, the _blackboard_, is updated with partial solutions.

Think of a detective case board where different detectives add evidence and conclusions to the board.

#### Block, Compound Statement

a collection of statements treated as a single statement for purposes of control flow.

#### Bootstrapping

i have seen two definitions:

- Starting up a computer; or
- A single script that loads an application and its dependencies into memory.

#### Bottom Up Programming

(1) the individual base elements of the system are specified, (2) these elements are then linked forming subsystems, (3) these subsystems are then linked, and so on, until (4) a top-level system is built.

#### Bound Variables

a variable used within a function, which is either a parameter to the function or defined in the function's body.

See [free variables](#free-variables).

```javascript
function (x) { // x is the bound variable
   return x + y;
}
```

#### Boundary Testing

testing at the boundaries of the input domain because bugs often occur at boundaries.

#### Boy Scout Rule

leave code cleaner than when you found it.

#### Boyce–Codd Normal Forms

a normal form used in database normalization.

#### Breaking Encapsulation

roughly speaking, in an object-oriented context, encapsulation breaks when the internal state of an object is accessible outside the object itself.

#### Broken Window Theory

not attending to small issues creates a perception of abandonment and results in the development of more significant issues.

#### Browser Object Model (BOM)

a browser-specific interface provided to expose browser functionality separate from the DOM.

#### Bubble Sort

an algorithm for sorting arrays.

A bubble sort starts on the left of an array and switches elements that are next to each other if they are in the wrong order. This technique usually requires multiple passes to sort the array. It is an inefficient technique and rarely used in the wild. O(n^2)

#### Buffer, Data Buffer

memory used to store data temporarily while the data is transported.

#### Business Process

a collection of related business rules that serve a particular purpose.

#### Business Rules

rules that apply to any aspect of a business that resolve to true or false.

In totality, they dictate what an organization can and cannot do.

#### Byte

eight bits.

Historically, byte referred to the amount of memory needed to store one character of text. The IBM 360 used an eight-bit byte for its text encoding, and due to the 360s overwhelming popularity, the Intel 8008 also used an eight-bit byte, even though it didn't support an eight-bit encoding scheme for text. Since then, 8 bits is a byte even though ASCII is 7 bits.

#### Byte Order Mark (BOM)

a Unicode character, U+FEFF, when appearing as a magic number at the start of a text file can signal several things: (1) the byte order, or endianness of the text stream, (2) that the text encoding is Unicode, or (3) the particular Unicode encoding system.

Some Microsoft text software, like Notepad, requires the BOM to use UTF-8 encoding.

#### Bytecode

a more efficient version of source code designed for faster execution by a virtual machine. Bytecode is not as low-level as object/machine code.

**[⬆ back to index](#index)**

## C

#### C

a compiled and statically typed high-level language.

Dennis Ritchie developed C between 1969 and 1973 at Bell Labs.

#### C++, C with Classes

a language that is similar to C with stronger OOP features.

It was developed at Bell Labs starting in 1979.

#### C#, C Sharp

a compiled language developed by Microsoft that generally follows C/C++ syntax and is commonly known as a Java alternative.

It is less verbose than Java.

#### Callback

a reference to a function passed as an argument to other functions.

```javascript
addEventListener("click", callback);
```

#### Call Stack, Execution Stack, Program Stack, Control Stack

an abstraction that represents a vertical stack of called functions.

Called functions are added to the stack, and when the function completes, it is popped off the stack; last in first out. In JavaScript, the call stack is often named the Execution Stack or Execution Context Stack.

#### Callback Hell, Pyramid of Doom

name given to deeply nested callbacks.

Nested callbacks are hard to reason around. Pyramid of Doom derives from the fact that they can look like a pyramid on its side.

```javascript
function a(b) {
  b.forEach(function (c) {
    c.forEach(d);
  });
}
```

#### camelCase, LowerCamelCase, Dromedary Case

a naming convention where each letter in a compound word is capitalized except for the first letter.

The name is derived from the humps on a camel's back.

See [UpperCamelCase](#camelcase-uppercamelcase-pascal-case).

```javascript
let smallVar;
let camelCaseVar;
```

#### CamelCase, UpperCamelCase, Pascal Case

a naming convention where each letter in a compound word is capitalized.

The name is derived from the humps on a camel's back.

See [LowerCamelCase](#camelcase-lowercamelcase-dromedary-case).

```javascript
let BigVar;
let CamelCaseVar;
```

#### Casting

code that explicitly tells the compiler that a value is of a certain type.

#### Category Theory

branch of mathematics that is used extensively in the functional programming (FP) paradigm.

The terms category, functor, monoid, monad, and many others that appear in FP originally come from category theory.

#### Charity Code Jam

events where developers produce an app for charity in a quick time frame.

#### Checked Exceptions

in Java, exceptions that must be explicitly handled by being caught or thrown.

#### Cipher

an algorithm for performing encryption or decryption.

#### Ciphertext

an encrypted form of data.

#### clang-format

an auto-code formatter developed by Google.

#### Class

a template for creating objects that provide initial values for member properties (data) and member methods (functions).

Class is a widely implemented design pattern.

#### Class Attributes

properties that are shared by all instances of a class, including the class itself.

#### Classical Inheritance, Class Inheritance, White-Box Reuse

a technique characterized by using classes as templates to define objects and creating subclasses to extend functionality.

_White_ in _white-box_ because the parent implementation is visible to the subclass.

#### Clean Room Design, Clean-Room Design, Chinese Wall Technique

copying a design by reverse engineering and then recreating a new design with the knowledge gained from the reverse engineering, but without infringing any original design's copyrights.

#### Client Code

source code that is intended to consume the API of other code, classes, objects, etc.

Client code is a _client_ of the API.

#### Cloning

the process of making a replica of an object instead of a reference.

#### Close To The Metal

programming in an environment that allows direct interaction with the hardware.

#### Closure, Bound Method, Bound Function

a function that can access its outer variables.

Unlike many languages, which do not allow closures or require special techniques, in JavaScript nearly all functions are closures because functions in JavaScript retain an internal reference to the lexical environment that created it.

Sometimes people require that a closure be observable. In the code below, `bar()` does not reference bindings in its outer lexical environment and thus isn't an observable closure.

```javascript
function foo() {
  let x = 1;

  function bar() {}
  bar();
}
foo();
```

In the code below, `bar()` does reference outer free variables, and therefore we have observed a function that is a closure.

```javascript
function foo() {
  let x = 1;

  function bar() {
    console.log(x);
  }

  return bar;
}

let boo = foo();
boo();
```

#### Cluster Geeking

spending a lot of time in the computer cluster/lab.

#### COBOL, Common Business-Oriented Language

a compiled language designed in 1959 that added OOP features in 2002.

COBOL was partly based on previous design work by Grace Hopper.

#### Code Freeze

when no more work will be done to the code before release.

#### Code Smell

a surface indication in code that usually corresponds to a deeper problem.

#### Codewalker

a program that traverses the source code of other programs.

#### Cognitive Load

refers to the used amount of working memory resources; working memory resources refers to the part of our brain that is managing information in the present moment.

Working memory can only hold around three to four bits of information at one time, and data in working memory lasts only around ten seconds.

#### Cohesion

a measure of how strongly-related the code inside a module is.

Typically, cohesion is inversely proportional to _coupling_.

#### Color Channel

stores the color information for one of the primary color components of a particular color model.

For example, the RGB color model has three separate color channels: one for red, one for green, and one for blue.

#### Common Law Feature

a bug that has existed long enough that it has become part of the expected functionality.

#### Communicating Sequential Processes (CSP)

a formal language for writing code in concurrent systems.

#### Compiled Language

languages that use a compiler to implement a program.

Typically compiled languages run faster than interpreted languages.

#### Compiler

a program that takes source code and converts it to a lower-level language, typically object/machine code, which is then processed directly by the CPU.

#### Complex Primitives, Primitive Wrapper Objects

an object type that wraps primitives to provide useful methods.

Complex primitives can be auto-boxed or manually created. For example, `String(), Number()` are functions that can create a complex primitive type.

#### Complexity Boosters

development decisions that substantially increase the complexity of your software.

For example, using explicit multithreading, extreme performance, or distributed layers.

#### Composition

typically the term is referring to either (1) functional composition or (2) object composition.

#### Computer-Aided Software Engineering (CASE)

software tools that automate the development of software.

#### Computer Vision

the study and pursuit of how computers can understand digital images and videos.

#### Concatenate

adding elements together, typically strings, front-to-back.

Pronounced (CON-CAT-IN-NATE). For example, `"Jake" + " " + "Knerr"` concatenated is `Jake Knerr`.

#### Concrete Class

a class that can be instantiated.

In other words, a class that is not abstract or sealed.

#### Concrete Tree, Parse Tree

a rooted tree representation of structured data.

Unlike an abstract syntax tree, a concrete tree does represent every detail appearing in the data.

#### Concurrency

working on more than one task at a time, and the tasks do not run at precisely the same instant.

For example, multitasking on a single-core machine.

See [parallelism](#parallelism).

#### Concurrency Pattern

a design pattern designed to deal with multithreading issues.

#### Constructor

functions that create objects when invoked.

#### Constructor Overloading

Java and other languages support creating multiple constructors with different signatures, and the constructor invoked with `new` will be the one matching the passed arguments' types.

#### Container Class

a C++ concept, they are similar to collections.

#### Containment

a type of object composition that stores several instances of the composited data type.

An array is a containment.

#### Content Negotiation

as defined by the HTTP protocol: when the browser requests data in a specific format and the server decides what to deliver — for example, a server deciding to return JSON or XML.

#### Context, Function Context

in JavaScript, context is determined by how a function is called, which will determine to what`this` refers.

Not to be confused with execution context.

In more specific terms, the execution context that is created when a function is invoked will create a lexical environment with a reference to the `this` binding. Often, the value of `this` is named the function context or merely context for a function call, even if this is confusing with regards to the term execution context.

#### Context Variables

a variable that is used to point to a current item in a collection, and is reassigned when you move to a new item in the collection.

```javascript
let currentItem;
for (let i = 0; i < 100; i++) {
  // currentItem is the context variable
  currentItem = array[i];
}
```

#### Continuation Line, Continued Line

a line of code that requires more than one line and continues on the next line.

#### Continuation Passing Style (CPS)

a style of programming in which functions take an explicit _continuation_ argument.

When the function finishes, it calls the continuation function and passes any calculated values. CPS is associated with functional programming and recursion.

```javascript
function calc(x, y, callback) {
  callback(x + y);
}
```

#### Control Flow

the execution order of the statements of an imperative program.

#### Control Flow Graph

a graph representation of all possible control flow paths through a program during its execution.

#### Cookie, Magic Cookie, Opaque Object

a packet of data passed between communicating programs.

Typically, it is data that is not meaningful to the recipient. The name derives from _fortune cookies_ because of the hidden information inside.

#### Corner Case

a problem that occurs outside of normal operation.

#### Cross-Origin Resource Sharing (CORS) Preflight Request

a CORS request that checks to see if the CORS protocol is understood.

#### Coupling

the degree of interdependence between software modules.

In other words, coupling measures how closely connected two modules are.

Typically, coupling is inversely proportional to _cohesion_.

#### Cowboy Coding

a derogatory term for development without a defined or structured team.

In other words, cowboy coding is undisciplined development.

#### Craft

a mix of artistic and technical work.

An excellent example of a craft is creating software.

#### Create, Get, Put, Delete (CRUD)

an acronym to remember the typical ways to interact with data collections.

CRUD is commonly used in database operations.

#### Critical Path

the sequence of critical tasks in a project.

The critical path determines the minimum time that is required to complete a project.

#### Critical Path Method (CPM)

a technique used in project management to plan and manage project scheduling.

See [critical task](#critical-task) and [critical path](#critical-path).

#### Critical Task

a task that must be completed for a project to be completed.

Delaying critical tasks will affect the project's finish date.

#### Cross-Cutting Concerns

behavior that affects disparate parts of a program and could be scattered or tangled throughout the program.

Cross-cutting concerns do not serve the primary role of the modules in which they exist, and they do not fit cleanly into object-oriented programming. Logging is a classic example.

See [aspects](#aspects)

#### Cross-Origin Resource Sharing (CORS)

a system using transmitted HTTP headers that determine whether to block or fulfill requests for resources from an external location.

#### CSS Combinators

the symbols that can go between simple selectors in a rule: ` `, `>`, and `+`.

All the combinators match parent-child relationships.

```css
/* white space is the combinator */
div img {
}

/* > is the combinator */
div > img {
}

/* + is the combinator */
div + img {
}
```

#### CSS Selector

a sequence of one or more simple selectors separated by combinators.

#### CSS Simple Selector

a type or universal selector followed by optional attribute selectors, ID selectors, or pseudo-classes.

#### CSS Subjects of the Selector

the elements in the HTML document that match a selector.

#### Currying

transforming a function with an arity of >= two to a series of functions that each have an arity of one.

Currying is very useful in JavaScript because functions can only return a single value, so curried functions can be composed.

```javascript
function foo(a, b, c) {
  return a + b + c;
}

// curried foo
function bar(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

// these provide the same value
console.log(foo(1, 2, 3) === bar(1)(2)(3));
```

#### Cyclomatic Complexity

a metric used to measure the complexity of a program.

Cyclomatic complexity is calculated by counting the number of paths through the source code using control flow graphs. For instance, if the source code contained no branching points (`if` or `for` statements), the complexity would be one since there is only a single path. However, if the code had a single branching point (one `if` statement) then the complexity would be two.

**[⬆ back to index](#index)**

## D

#### Daemon

in UNIX, a program that runs in the background.

Pronounced (DEE-MIN).

#### Data Intensive Real Time Applications (DIRT)

applications that focus on real-time communications.

#### Data Last Style, Data-Last

a traditional convention in functional languages that states that the data to be processed is the last parameter for a function.

The reason for the style is to make function composition easier because currying/partial application is applied to the parameters starting on the left of the function signature.

#### Data Structure

the implementation of an abstract data type.

#### Data Transfer Object (DTO)

an object that carries data between processes and has no behavior.

#### Database Management System (DBMS)

a general-purpose DBMS enables the definition, creation, querying, update, and administration of databases.

#### Database Normalization

a technique to eliminate redundancy and dependencies for relational databases.

In a normalized database, all rows are unique, and no entries are null.

#### Database Schema

a description of the structure of a database.

#### Database View, View On SQL

the result set of a stored query on the data.

#### Deadly Embrace, Deadlock

when two concurrent processes are waiting for each other to do something before they do anything, causing them both to freeze.

#### Debouncing

ensures that a function is not called again until a specified interval passes.

For example, "execute this function only if 100 milliseconds have passed without it being called." Debouncing is useful to slow down processing to prevent application lockup.

See [throttling](#throttling).

#### Declarative Programming

a non-imperative style that does not explicitly list commands.

Declarative programming relies on expressions rather than statements. Functional programming is characterized by using this style.

#### Declarative vs. Imperative

declarative is to declare what one wants (HTML/CSS), and imperative is to state commands as to how to do it (JavaScript).

#### Decorator Function, Decorators

derived from the decorator pattern: A function that calls another function, and _decorates_ it by adding additional functionality.

Often, decorators add generalized functionality to other more specific functions. In some languages, they have a specialized syntax.

Decorators are not supported in JavaScript, but they have been proposed.

```javascript
function readonly(target, name, descriptor) {
  descriptor.writable = false;

  return descriptor;
}

class Car {
  @readonly // syntax for decorator proposal
  name() {
    return "corvette";
  }
}
```

#### Deep Copy

copy an object and all embedded objects.

#### Deep Equality

when all the properties of two objects are equal.

#### Deep Linking, Deep Link

hyperlinks that point to a resource that is not the home page.

#### Delegation

when a sender object method is called, and it actually calls another object's (receiver) method. In the receiver's called method, `this` refers to the sender object.

JavaScript's _call()_ and _apply()_ are explicit delegation mechanisms.

Delegation is commonly confused with forwarding. The difference between delegation and forwarding is that for forwarding, _this_ refers to the receiver, unlike delegation, where `this` refers to the sender.

A great example on Stack Overflow is to think of receiving an email asking you to donate money to a charity. If you forward the email to a friend who gives money, this is forwarding. If you delegate responding to your accountant, who donates your money, this is delegation.

```javascript
// sender object
let objA = {
  val: "a",
  runA() {
    return objB.runB.call(objA); // delegates the call to the receiver
  },
};

// receiver object
let objB = {
  val: "b",
  runB() {
    // this refers to the sender (objA); this is delegation not forwarding
    return this.val;
  },
};

console.log(objA.runA()); // outputs "a"
```

#### Delimiter, Delimited

a character used to signify a boundary between separate terms in plain text.

For example, the comma is the delimiter in this string "john,muhammad,sally,fernando,juan,xiao,bill".

#### Dense Array

an array without holes.

#### Dependency

when an object (A) _depends_ on another object (B), and both objects exist independently.

#### Dependency Diagram, Dependency Graph

a diagram where arrows signify module interdependencies.

#### Dependency Injection (DI)

a form of IoC; this is a design pattern where an object's dependencies are not created internally from within an object but are created from outside the object and passed to it.

DI _inverts_ the typical way of creating object dependencies.

Robert Martin and Martin Fowler popularized the term.

```javascript
// classic way of making Goodyear a hard-wired dependency of Car
class Car {
  constructor() {
    this.wheel = new Goodyear();
  }
}

// DI - the wheel dependency is passed when Car is instantiated; Car is not explicitly creating a dependency on Goodyear
class Car {
  constructor(wheel) {
    this.wheel = wheel;
  }
}

let car = new Car(new Goodyear());
```

#### Dependency Inversion Principle

- High-level modules should not depend on low-level modules. Both should depend on abstractions, such as interfaces.
- Abstractions should not depend on details. Details, such as concrete implementations, should depend on abstractions.

Instead of high-level modules creating hard dependencies to low-level modules, both should depend on abstractions that generalize the modules' interactions rather than involving implementation details. This technique works to decouple modules.

This principle _inverts_ the common scenario, which is high-level modules coupling themselves to low-level modules via hardwired dependencies.

See [SOLID](#solid-solid).

#### Dependency Magnet

a class or module that many other classes or modules must use.

Dependency magnets are similar to a god class and are discouraged.

#### Derived Class, Subclass

another name for a child class.

#### Descender

in typography, the part of a lowercase letter that falls below the baseline.

In English: _g_, _j_, _p_, _q_, and _y_ have descenders.

#### Deserialize, Unmarshalling

extracting a data structure or object from serialized data.

#### Design By Contract

when designers define formal, precise, and verifiable interface specifications for software components with preconditions, postconditions, and invariants for function calls.

#### Design vs. Style

style is more concerned with aesthetic issues, while design is more concerned with functionality.

Both terms overlap each other, but their primary focus is different.

See [architecture vs. design](#architecture-vs-design).

#### Determinism, Deterministic

a system in which the same input always produces the same output.

In other words, determinism is predictable behavior.

#### Deterministic Finite Automaton (DFA)

A finite state machine where the state to which the machine moves is deterministic. See Non-Deterministic Finite Automaton.

#### DevOps, Dev Ops

a set of practices that emphasizes collaboration between software developers and other IT workers while automating the process of frequent software deployment.

DevOps grew out of the Agile movement and is similar to continuous delivery. A typical example is collaboration between development, quality testers, and operations workers to deliver software releases. DevOps aims to bring together siloed teams.

#### Diamond Problem

for multiple inheritance languages, this refers to the ambiguity when two classes (B & C) inherit from the same class (A), and another class (D) inherits from the original two classes (B & C).

In the above example, D may not know which overridden version of a method to use.

#### Dictionary, Dictionaries

a data structure that uses key-value pairs.

A JavaScript object literal is a dictionary.

#### Digest, Hash, Hash Value, Message Digest

the output of a cryptographic hash function.

`hash(message) => digest`

#### Dijstra's Rules on Structured Programming

programs should use only one-in, one-out control constructs.

In other words, a block of code can only have one start point and one endpoint.

#### Diktat

an order or decree imposed by someone in power without popular consent.

Pronounced: dik-tat

#### Direct Recursion

when a recursive function calls itself.

#### Directive, Pragma

a language construct that specifies how a compiler should process its input.

Directives are not part of the grammar of a programming language and may vary from compiler to compiler — for example, third-party tags in code that the compiler uses to customize the compilation.

Directives are used to refer to the code compiler, unlike annotations.

#### Dispatch, Dispatching, Dispatch Resolution

generally speaking, dispatch refers to the process by which the engine consumes a function invocation in code, resolves what function should be called, handles any other tasks like setting up default arguments, and then executes the call.

The decision of what function to call may be made lexically (static dispatch) or dynamically (dynamic dispatch).

Also known as dispatch resolution.

#### Divide and Conquer

a type of algorithm that takes a larger problem and breaks it into similar sub-problem, solves the sub-problems recursively, and then combines the results.

A typical example of divide and conquer is sorting an array by dividing it in half and sorting each half and then combining the result.

#### Do Not Repeat Yourself (DRY)

do not repeat code in your application that serves the same purpose.

DRY is a principle of software development that aims to reduce code repetition.

#### Doctype Decoration

when web developers add a doctype declaration to a web page but then do not write valid and semantic markup.

#### Dog and Pony Shows

demonstrating software to customers or clients.

#### Document Object Model (DOM)

the DOM is the data representation of a web document and also provides an interface to interact with the document.

#### Domain Logic, Business Logic

a general term referring to program code for business rules.

Domain logic is specific to the _domain_ of the application.

#### Domain Objects, Business Objects

an object used as a container for domain data and behavior.

Domain objects make up the domain model.

#### Domain Specific Language (DSL)

a computer language specialized in a particular application domain.

HTML and CSS are DSLs.

#### Dot Syntax, Dot Operator

accessing properties and methods of objects via dots.

For example, `object.x`

#### Downcasting, Type Refinement

casting a derived class's type to its base class.

#### Downstream

moving code away from the original developers of software.

#### Duck Typing

a style of dynamic typing in which an object's exposed methods and properties determine its type rather than the object itself.

In other words, object type is not determined by class, inheritance, or interfaces, but rather if the object has specific methods and properties.

_If it `quacks()` like a duck, and `walks()` like a duck, then it is a duck._

```javascript
class Rhino {
  quack() {}
  walks() {}
}

let rhino = new Rhino();

// is a Rhino a duck? YES.
if (rhino.quack && rhino.walks) console.log("it's a duck!");
```

#### Dunder, Magic Methods

names that use two prefixes and two suffix underscores.

For example, `__proto__`.

#### Dynamic Allocation, Dynamically Allocated

processes where memory is allocated on the fly.

Dynamic allocation is important for languages with manual memory management like C.

#### Dynamic Binding, Late Binding

when called object methods are looked up by name at runtime, so they do not need to be known at compile time.

#### Dynamic Programming, Dynamic Optimization

solving problems by breaking them into smaller steps, storing the solutions using memoization, and using the stored solutions later to prevent recalculation.

Dynamic programming is used most often for recursive problems.

#### Dynamic Typing, Dynamic Classes

checking type at runtime as opposed to compile time.

**[⬆ back to index](#index)**

## E

#### Eager Evaluations, Strict Evaluations, Greedy Evaluations

expressions that are evaluated immediately.

See [thunk](#thunk) and [lazy evaluations](#lazy-evaluations).

#### ECMAScript

a trademarked scripting language specification that JavaScript tracks.

ECMAScript was initially based on JavaScript. Other implementations of ECMAScript are ActionScript and JScript.

ActionScript (_wipes tear_), good times man, good times...

#### Edge Computing

an architectural approach that brings computation and storage closer to requests to reduce latency. Imagine the source of truth server replicating itself to many edge servers across the world. Next, user requests can be routed to the closest edge server to reduce latency.

#### Eiffel

a compiled, object-oriented language created to increase the reliability of commercial software development.

Eiffel was designed in 1985 by Betrand Meyer.

#### Egyptian Brackets, K & R Style

a brace style where the opening brace goes on the end of the line.

Egyptian brackets are named after the hand positions from the famous Bangles song "Walk Like an Egyptian."

```javascript
if (true) {
 ...
}
```

#### Elm

a purely functional language that compiles to JavaScript for web use.

Elm was designed in 2012 by Evan Czaplicki.

#### Encapsulation

collecting data and functions together and restricting access except via an interface.

Encapsulation is when one puts your data and functions _in a capsule_.

#### Encode

converting information into a particular form.

For example, locations can be encoded into GPS coordinates.

#### End-Of-Line Comment, Slash Comments

comments that can be inserted anywhere on a line and start with double slashes //.

#### Endianess

the sequential order used to interpret bytes as words in computer memory.

The big-endian format is when the most significant byte is stored first, and the following bytes are stored in order of decreasing significance. The little-endian format flips the order.

#### Enum Types, Enumerated Types

a data type that is a set of named constants.

```javascript
// pseudo enum; not an actual enum but has the spirit of an enum
const COLORS = {
  RED: 1,
  BLUE: 2,
  GREEN: 3,
};

let color = COLORS.RED;
if (color == COLORS.RED) {
}
```

#### Enumeration

a set of constant values.

#### Equational Reasoning

reasoning that involves equations.

Equational reasoning is typically is used in functional programming contexts to refer to how code can be replaced by other code in any context and not change the result of an expression.

#### Event Loop, Message Loop

an abstraction that puts functions from the message queue onto the call stack.

The event loop continuously checks if the call stack is empty, and if the call stack is empty, the event loop passes in queued functions from the message queue for execution.

Event Table -> Message Queue -> Event Loop -> Call Stack

#### Message Queue, Queue

stores the order of the functions that are waiting to be placed on the call stack by the event loop.

JavaScript has two message queues: the macrotask queue and the microtask queue.

#### Event Table

an abstraction that sends functions to the message queue after certain events fire.

Event Table -> Message Queue -> Event Loop -> Call Stack

#### Evergreen Browser

browsers that automatically update themselves silently without prompting the user.

An example is the Chrome browser.

#### Ex Nihilo Object

an object created using literal object notation.

Ex Nihilo is Latin for _object from nothing_.

#### Exception Handler, Handling An Exception

when an exception is thrown, the runtime engine looks for code to handle the error.

Typically, the use of `try {} catch {} finally{}` blocks are used to handle exceptions.

#### Exceptions

`Error` objects that carry messages data.

Exceptions is shorthand for "exceptional event."

#### Execution Context in JavaScript

an abstraction used to describe the environment that functions are invoked in JavaScript.

An execution context is created when a function is called, and it consists of (roughly) the function being called and the lexical environment the function is being executed within.

Execution contexts are placed on the execution stack.

#### Expando Properties

properties added to DOM nodes that are not a part of the node's specification.

```javascript
window.xyz = 1; // xyz is an expando property
```

#### Expression

code that produces a value and can be used anywhere a value is expected.

#### Extreme Programming

a type of agile software development that advocates frequent releases, code review, unit testing, pair programming, a flat management structure, and more.

**[⬆ back to index](#index)**

## F

#### Factory Function

in JavaScript, when invoking a function returns an object.

#### Falsy Objects

an artifact of JS is that some objects are falsy, like document.all.

Falsy objects are retained for legacy support.

#### Fan-In, High Fan-In, Low Fan-In

refers to the number of classes that consume a particular class.

When a large number of classes use a given class, that class has high fan-in. High fan-in is typically desirable for low-level utility classes that are designed to be reusable.

#### Fan-Out, High Fan-Out, Low Fan-Out

refers to how many classes a given class uses.

When a class uses many other classes, that class has high fan-out. High fan-in is typically desirable for high-level classes that should reuse lower-level classes.

#### Fat Client

a computer designed to not depend on another computer for its functions.

#### Fear Driven Development

when management uses fear to motivate.

#### Fear, Uncertainty, and Doubt (FUD)

a disinformation strategy to influence perception by disseminating negative, dubious, and false information to create uncertainty and apprehension.

#### Feature Envy

When one object uses (envies) the members of another object enough to create a code smell.

#### First Class Objects, First Class Functions, First-Class

an object that can be passed as a parameter, returned by a function, or assigned to a variable.

First class objects are typically referenced with regard to functions.

#### First Order Functions

functions that are not higher-order functions.

#### Flyweight

a object that minimizes memory use by sharing as much data as possible with other similar objects.

#### Footgun

a feature that has a high likelihood of causing the developer or user to shoot themselves in the foot.

#### Forking

with regards to Git, duplicating a repository, and creating a new independent repository.

Forking implies a hard break with the original.

#### Formal Inspections, Fagan Inspection

peer review of work looking for defects using a well-defined process.

#### Formal Technical Reviews

a review that is governed by written rules.

Studies show that formal technical reviews are more effective than informal reviews.

#### Fortran

a compiled, general-purpose, non-OOP language that is especially suited to numeric computation and scientific computing.

Fortran is the oldest high-level programming language in use today. It was designed in the 1950s by IBM. The name is derived from _formula translation_.

#### Forward Proxy

a server used to grab data from the internet and forward it to the client.

See [reverse proxy](#reverse-proxy).

#### Forward Compatibility, Forward Compatible

when a new feature would not break an older version of the program.

For example, JavaScript is not forwards compatible because if you use a feature from ES2019 in a browser from 2005, it breaks the old browser. CSS, on the other hand, is forwards compatible because if you included a new CSS directive in a browser from 2005, it would not break the page but would instead be skipped. The ancient browser is forwards compatible with regard to CSS.

#### Forwarding

when a sender object method is called, and it actually calls another object's (receiver) method.

In the receiver's called method, `this` refers to the receiver.

Delegation is nearly the same, but `this` is different. See delegation for a more detailed explanation of the difference between the two.

```javascript
// sender object
let objA = {
  val: "a",
  runA() {
    return objB.runB(); // forwards the call to the receiver
  },
};

// receiver object
let objB = {
  val: "b",
  runB() {
    return this.val; // `this` refers to the receiver: `objB`
  },
};

console.log(objA.runA()); // outputs "b"
```

#### Framework

an abstract design that requires a user to insert their behavior into the framework's abstractions.

Typically, frameworks make many design decisions for the program. "Your code calls a Library; a framework calls your code."

#### Free As In Puppy

getting a free puppy is great, but puppies also come with responsibilities.

#### Free Theorems and Parametricity

Parametricity is the idea that a polymorphic function will act on all types in a uniform manner.

For example, `// sum :: a -> a`. Since `a` is not a specific type, the function will act on all passed types uniformly.

Knowing this provides us with _free theorems_ about the behavior of the function. They are _free_ because you do not need to look at the function's code to derive them.

#### Free Variables

with regard to a function, a variable that is used but is not declared locally and not passed as a parameter.

```javascript
let x;

function y() {
  // x is a free variable for function y
  console.log(x);
}
```

#### Friend Class, Friend Function

a C++ concept in which a class can access the private/protected members of another class.

#### Fruitful Functions

a function that returns a value.

#### Full Semantics

defining the purpose of a program.

#### Function, Method

a type of procedure that accepts arguments and returns data.

#### Function Body, Method Body

the statements that make up a function.

#### Function Composition, Functional Composition

feeding the output of a function to the input of another function.

The functional programming paradigm is characterized by function composition.

```javascript
f(g(x));
```

#### Function Declaration, Function Statement

a named function not assigned to a variable as an expression.

```javascript
function fn() {}
```

#### Function Expression

either an unnamed function, a function assigned to a variable as an expression, or a function defined as an IIFE.

```javascript
const fn = function () {};
```

#### Function Overloading

a feature of some programming languages (like Java) that allows for the creation of several methods with the same name that accept different argument types, and depending on the type of the passed argument, the appropriate method is called.

Strictly speaking, function overloading is not supported in JavaScript.

#### Function Signature, Method Signature

the declaration of the function and its parameters.

The function signature typically includes inputs, return types, errors, and arguments.

#### Function Specification, Method Specification

a comment that defines:

- Assumptions about the arguments.
- What the function returns.
- Side effects caused by the function.

#### Functional Programming (FP)

a programming paradigm that focuses on immutable data, first-class functions, higher-order functions, pure functions, referential transparency, and recursion.

FP can deliver code that is more concise than imperative programming but is typically harder to understand.

Often, FP is considered declarative because the focus is on expressing what is done rather than how.

It would be difficult to get ten programmers in a room to fully agree on a definition of FP.

#### Functor

practically speaking, a data structure that wraps a value and provides a `map` method; `map` runs over the wrapped value and returns another functor of the same type that wraps the newly mapped value.

Arrays in JavaScript are functors. `[1, 2, 3].map(x => 2 * x) // [2, 4, 6]`

Functors come from category theory and observe a set of functor laws that ensure they can be composed.

- Preserves Identity. <br>`functor.map(x => x) ≍ functor`
- Composable. <br>`functor.map(compose(f, g)) ≍ functor.map(g).map(f)`.

Note, this is a reductive definition of functors but is essentially accurate.

Functors are also known as containers, wrapped values, boxes, mappables, and many other terms.

#### Fuzzing, Fuzz Testing

a software testing technique that provides invalid, unexpected, and/or random inputs to software to gauge the response.

**[⬆ back to index](#index)**

## G

#### Garbage Collection, Automatic Memory Management

the process by which a program deallocates memory and removes unused data.

In JavaScript, the garbage collector uses a reference counting technique.

#### General-Purpose Language

a general-purpose language is broadly applicable across domains and lacks specialized features for a particular domain.

JavaScript/Java/C are all examples of a general purpose language.

#### Generalization, Specialization

removing the shared functionality from multiple functions, and moving the shared functionality into new functions; generalization leaves the affected functions more _specialized_, i.e., they serve a more specific purpose.

Generalization also fosters DRY code. Abstraction may be achieved through _generalization_.

#### Generic Functions

a function declared with generic types.

Generic functions are not supported in JavaScript.

```javascript
// generic function
function ducky<T>(arg: T): T {
  return arg;
}
```

#### Generic Types, Parameterized Types

when a programming language allows users to define a placeholder for the type in a function signature.

When using generic types, users pass in the explicit types when the method is called. In other words, the specification of one or more types is deferred until the class or method is instantiated or called by client code.

Not supported in JavaScript, but they are supported in Typescript.

```javascript
// T below is the generic type
function ducky<T>(arg: T): T {
  return arg;
}
```

#### Global Gary

a lousy programmer who uses the global namespace.

#### GLOC

1,000,000,000 (1 billion) lines of code.

#### God Object

an object that knows too much or does too much.

These are considered an anti-pattern.

#### Grace Hopper

an early pioneer in computer hardware and software who is credited with the development of COBOL and recording the first literal computer bug.

Also, she retired as an Admiral in the United States Navy.

#### Granular Objects

refers to objects that are defined at a low level of abstraction in your program.

#### Graphs

a data structure consisting of nodes (also known as vertices) and edges (also known as lines or arcs).

In such a structure, nodes are data, and the edges represent a linkage between nodes. A Facebook network could be abstracted as a graph, with each person being a node and their friends being connected to them via an edge.

#### GraphQL

a data query language developed by Facebook that has been publicly released.

GraphQL provides an alternative to REST and other architectures.

#### Greedy Algorithm

a type of algorithm that maximizes the function at the current step without any concern about other steps.

#### Greenfield Project

a project that lacks constraints imposed by prior work.

#### Grep

a Unix command used to search files for the occurrence of a string that matches a specified pattern.

#### Grok

understanding code in a profound way.

To grok something is not only to understand it, but to have deeply entered the world view and spirit of the concept.

#### Guardian Code, Defensive Programming

writing code to make sure that the input data is the expected type or to more generally look for a potential error.

**[⬆ back to index](#index)**

## H

#### Handler

a function designed to handle asynchronous events.

#### 'Has-a' Relationship

in object composition, this is a type of relationship between objects in which the composited object _belongs_ to another object (the composite object).

See ['is-a' relationship](#is-a-relationship).

#### Hash Function, Hashing

a function that takes variable length data and converts it to a fixed length.

See digest.

#### Hash Tables

a data structure that takes key/value data, hashes the key into an integer (index), and then stores the key/value data at the hashed index.

If the keys for different key/value pairs hash to the same index, store collisions in a linked list for lookup at each index and iterate through the key/value pairs to find the desired data.

Hash tables are efficient data structures.

#### Headless Software

software that can function without a graphical user interface.

#### Heap, Min Heap, Max Heap

a specialized tree-based data structure that comes in two types: (1) min-heap means that for each node, its children have higher values, and (2) max-heap means that for each node, its children have lower values.

#### Heisenbug

a software bug that is hard to understand, hard to eliminate, and may be non-deterministic.

#### Helper Functions, Helpers

refer to functions that perform part of the computation of another function. They may be used in multiple modules but serving a related purpose each time.

Helpers do not add to the API for an object. Instead, helpers allow objects to share code without affecting their exposed interface. They are not generally used for cross-cutting concerns and therefore do not exist in a top-level directory like utilities.

#### Hero Image

a prominently placed image on a web page designed to be the first thing a visitor will see.

#### Heuristic

an approach to problem solving that uses a practical method, not guaranteed to be optimal, for reaching an immediate goal.

Also known as a rule of thumb, an educated guess, etc.

#### Higgs-Bugson

a bug predicted to exist based on vague reports.

Such bugs are difficult to reproduce, and their existence is debatable.

#### High Quality Henry

a highly competent programmer.

#### Higher Order Function, Higher-Order Function

a function that does at least one of two things:

- Takes one or more functions as an input; or
- Returns a function.

#### Hindenbug

a catastrophic bug that destroys data.

#### Hindley-Milner (HM) Type System

used by many functional programming languages to describe the signatures of pure functions.

HM syntax is borrowed from the classical type system used in lambda calculus.

```javascript
// power :: Number → Number
const power = (num) => Math.pow(num, 2);
```

#### Hoisting, Early Activation

in JavaScript, the process by which function and variable declarations are moved to the top of their containing scope.

Function declarations have early activation, and `var` declarations are partially early activated because their value is not hoisted.

Hoisting stems from how lexical environments are created.

#### The Hollywood Principle, Don't Call Us, We'll Call You, Inversion of Control (IoC)

a paradigm where the framework controls the application control flow instead of the application code.

#### Hook, Hooking

code designed to tap into different modules and provide functionality.

#### Hooker Code

code that is problematic and causes application instability.

Hooker code causes applications to _go down_.

#### Horizontal Scaling

dividing a system over multiple servers, with each server handling a subset of the overall workload.

Horizontal scaling is capable of delivering unlimited performance, but the trade off is increased complexity.

#### Host Objects

objects supplied by a runtime environment.

For example, a browser provides the `window` object.

#### HTML: Tags vs. Elements

a tag in HTML is the opening or closing entity for an element, and an element is an entire entity.

An element includes the tags and the element's content.

```html
<!-- <div> is a tag and </div> is a tag -->
<!-- <div>Content</div> is an element -->
<div>Content</div>
```

#### HTTP Methods, HTTP Verbs

a technique of telling the server what to do with regard to a particular resource.

_GET_ is a typical example.

#### Hungarian Notation

a naming convention where the prefix for a variable is the value's type.

For example, `let longAddress = "4657 Decatur..."` would be `let stringLongAddress = "4657 Decatur..."` in Hungarian notation.

_Hungarian_ because in Hungary, a person's name is reversed, meaning that the family name precedes the given name. I would be _Knerr Jake_. I think Japanese is the same.

#### Hunt and Peck

derogatory term for typing in which only one or two fingers are used while looking at the keys.

#### Hydra Code

code that cannot be fixed.

Hydra code derives from the hydra that grew two heads for each head cut off.

#### Hypermedia

an extension of the term hypertext, a non-linear medium of information , which includes graphics, audio, video, plain text, and hyperlinks.

The web is hypermedia.

**[⬆ back to index](#index)**

## I

#### i18n

internationalization and localization where 18 stands for the number of letters between the first i and the last n in the word _internationalization_.

Generally, i18n refers to enabling easy localization for specific target audiences.

#### Idempotent

an operation that is safe to perform multiple times.

Pronounced (I-DEM-PO-TENT).

#### Identifier

characters in code that identify variables, functions, or other properties.

Identifiers differ from strings in that strings are data and identifiers are not.

```javascript
const iAmAIdentifier = 10;
```

#### Idiomatic, Idiomatic JavaScript

code that is written in a natural and familiar way to programmers.

#### Immediately Invoked Function Expressions (IIFE)

a JavaScript concept in which a function expression is immediately called.

IIFEs are typically used to create a functional scope for code to run within. In modern JavaScript, they are no longer useful since you can create a block scope using curly brackets.

```javascript
(function () {
  let i = 10;
})(); // IIFE

// this achieves the same thing
{
  let i = 10;
}
```

#### Imperative Programming

describing computation in terms of state-changing statements.

Think of it as giving commands like an imperator. JavaScript is an imperative programming language. HTML is not.

#### Implementation

an implementation is a realization of a technical specification.

#### Implementation Detail

describes how to implement a specification.

In other words, a specific implementation. For example, a List ADT may require a list of data but doesn't specify what kind of list. Using an Array would be an implementation detail of the List specification.

#### Implicit Conversion, Coercion

the process by which a compiler or runtime engine automatically converts data to a specific type.

The conversion is not explicit in the code.

```javascript
// `1` is implicitly coerced to a string before being concatenated with `abc`
let str = "abc" + 1;

console.log(str); // outputs abc1
```

#### Incremental Development

a type of software development characterized by building small portions of a program at a time.

#### Indirection

referencing a value with a pointer.

A variable is a level of indirection with regard to the value it points too.

#### Informal Technical Reviews

a review that is not governed by written rules.

Studies show they are less effective than formal reviews.

#### Information Hiding

the concept of suppressing data from direct access.

See [encapsulation](#encapsulation).

#### Input Method Editor (IME)

a program that enables users to enter characters and symbols not found on their input devices.

Typically, IMEs convert keystrokes to characters in another language.

#### Instance

a specific object created from a class.

The specific object is known as an _instance_ of the class.

#### Institute of Electrical and Electronics Engineers (IEEE)

the world's largest association of technical professionals with more than 400,000 members in chapters around the world.

The IEEE objectives are the educational and technical advancement of electrical and electronic engineering, telecommunications, computer engineering, and allied disciplines.

Its headquarters is in Piscataway, NJ.

#### Integration Testing

testing individual modules when they are linked together as a group.

These tests are typically performed after unit testing.

#### Interface Description Language, Interface Definition Language (IDL)

a language used to describe an API.

IDLs describe an interface in a language-independent way.

#### Interface Segregation Principle

no client should be forced to depend on methods it does not use.

In other words, client code should not be tied to interfaces that offer more functionality than the client needs. Interfaces should be specific and narrowly prescribed.

See [SOLID](#solid-solid).

#### Interleaved, Interleaving

i have seen multiple definitions of this term:

- Combining iterable data structures like strings or arrays while preserving their original order with respect to themselves; or
- The order of function calls.

```javascript
let strA = "abc";
let strB = "def";

// combine `strA` and `strB` and determine if the resulting combination is an
// interleaved version of them

("adefcb"); // no, not interleaved; because c should not come before b
("eabdfbc"); // no, not interleaved; because e should not come before d
("abdecf"); // yes, interleaved
("dabecf"); // yes, interleaved
```

#### Interpolate, Interpolation, Lerp

estimating a value based on other known data.

#### Interpreted Language

languages that are executed by an interpreter instead of being compiled.

Interpreted languages are generally slower than compiled languages but have greater platform independence.

Browsers were initially interpreters running JavaScript as an interpreted language. However, modern JavaScript engines compile code right before running it.

See [just in time compilation](#just-in-time-compilation-jit-dynamic-translation-run-time-compilation).

#### Interpreter

an interpreter is a program that runs another program.

#### 'Is-a' Relationship

if object A is a subclass of object B, A has an "is-a" relationship with B.

#### Isomorphic Data

data that can be converted to a different form and back without any loss of information.

#### Isomorphic JavaScript, Universal JavaScript

JavaScript applications that can run in the server and the browser.

Isomorphic applications are useful to speed up the initial page load time.

#### Iteration

a control structure that executes a group of statements multiple times.

#### Iterator, Cursor

an object with behavior used to traverse a collection.

**[⬆ back to index](#index)**

## J

#### Java

an object-oriented, compiled, concurrent, and class-based language that is designed to run in virtual machines on many platforms.

Java first appeared in 1995 and was designed by James Gosling at Sun Microsystems. Java is still the world's most popular language by many definitions. It is named after American slang for coffee.

#### Java Swing

the primary Java GUI widget toolkit.

#### Jenga Code

programs that collapse after you alter a block of code.

#### Jimmy

an inexperienced developer.

#### JSON with Padding, JSONP

technique used to circumvent cross-domain scripting restrictions.

Below is a very basic example:

```html
<!-- client -->
<script>
  function getData(data) {
    console.log("data from server -> ", data);
  }
</script>
<script src="another-site.php"></script>
```

```php
// another-site.php
// when the script in client receives this string it will execute
// `getData(data)` with the returned data as an argument
echo "getData('data')";
```

#### Just In Time Compilation (JIT), Dynamic Translation, Run-Time Compilation

a technique where source code is compiled right before execution.

Modern JavaScript environments use JIT.

**[⬆ back to index](#index)**

## K

#### Kaizen

continuously improving one's applications and work.

Kaizen is Japanese for "improvement." Pronounced KAI-ZN.

#### Keywords

reserved words used by the programming language that have special meaning.

For example, `class`, `for`, `if`, etc.

#### Keep It Simple Stupid (KISS)

The principle that simplicity is the ultimate sophistication.

#### Kleene Star

the `\*` in regular expressions that denote "match the preceding character zero or many times."

Pronounced KLEE-NEE.

#### KLOC

one-thousand (1000) lines of code.

Pronounced KAY-LOC.

#### Kludge

an awkward or clumsy solution.

Kludge is indirectly derived from the German word _klug_, which means clever.

#### Knowledge Portfolio

all of one's knowledge and experience.

#### Knurd

alternative spelling of nerd. Originates from slang referring to college students who pursued interests that are the opposite of getting "drunk", which spelled backwards is knurd.

**[⬆ back to index](#index)**

## L

#### L10n

language localization that generally refers to adapting software to a specific market.

#### Labeled Jumps, Labeled Loops

in JavaScript, a label can be used to identify a loop, and then the `break` or `continue` statements can be used to indicate whether a program should interrupt the loop or continue executing.

Labeled jumps are similar to the `goto` statement in other languages.

```javascript
let i;
let j;

loopI: for (i = 0; i < 1; i++) {
  loopJ: for (j = 0; j < 10; j++) {
    console.log(i, j);
    break loopI;
  }
}

// logged: 0 0
// notice how the outer loop was broken inside the inner loop
```

#### Lambda Expressions, Anonymous Functions

a function that is not bound to a pointer.

#### Language Lawyer

a software engineer familiar with many drawbacks and features of a particular programming language.

#### Last In First Out (LIFO)

See [stack](#stack).

#### Last Responsible Moment

the moment at which failing to make a decision eliminates a valuable alternative.

#### Law of Demeter (LoD), Principle of Least Knowledge

avoid calling methods on an object returned by calling a method on a different object.

For example, if A calls a method on B, and B returns C, A should not then call methods on C. Instead, B should present an interface that allows A to do what it wants by directly calling a method on B. Otherwise, A requires knowledge of B's implementation in violation of the idea of programming to an interface.

```javascript
let objA = {
  runA() {
    return objB;
  },
  a() {
    return objA;
  },
  b() {
    return objA;
  },
  c() {
    return objA;
  },
};
let objB = {
  runB() {},
};

// violates the law of demeter; `runA()` and `runB()` are methods on different
// objects
objA.runA().runB();

// does not violate the law of demeter because the returned objects are the
// same as the object used for the initial function call
objA.a().b().c();
```

#### Layers Architectural Pattern, Layer, Logical Layer

layers are an abstract way of organizing one's application code separated by specific roles, and each layer only communicates with the layer above and below it.

Layers can all run on the same tier or not. Typical layers are:

- Presentation layer.
- Application/Service layer.
- Business/Domain layer.
- Data/Persistence layer.

#### Lazy Evaluations

expressions that are not evaluated immediately.

#### Leaky Abstraction

when details, which should be suppressed, _leak_ and become visible to a user of the abstraction.

#### LeBlanc's Law

later equals never.

#### Left Hand Side (LHS)

refers to the left-hand side of an assignment.

For example, `let a = 10`. The LHS is `a`.

#### Lenses

pure getter and setter functions that can retrieve or update data within an object.

They are used to abstract the process of interacting with complex data objects. Typically, lenses arise in functional programming paradigms.

```javascript
const person = { name: "Jake", type: "human" };

const lens = (getter, setter) => { get: getter, set: setter };
const getName = (obj) => obj.name;
const setName = (obj) => (part) => ({...obj, name: part});
const nameLens = lens(getName, setName);

nameLens.get(user)); // Jake
nameLens.set(user)("Jacque")); // { name: "Jacque", type: "human" }
```

#### LePUS3

a software modeling language.

#### Lexer, Lexing, Tokenizing

converts text into smaller units, such as words or letters.

A lexer may also attach meta-data to the tokens. Results are typically fed into a parser to create an abstract syntax tree.

#### Lexical Scope, Static Scope

scope that is determined at compile time by the location of the code.

JavaScript uses lexical scoping, but it can be cheated in a few ways like `eval` in non-strict mode.

#### Library

a library is essentially a set of functions designed for reuse.

"Your code calls a Library; a Framework calls your code."

#### Lifting

in a general sense, transforming a function into another function for use in another context; the new context is typically more generalized.

Lifting is commonly used in functional programming to move non-functor functions into a functor context.

#### Line of Business (LOB)

an application that is vital for running an enterprise.

Often, LOBs refer to internal applications.

#### Linked Lists, Double Linked Lists

a data structure where each element of a list points to its value and to the next element in the list.

Each element is the list is _linked_ to the next element. A doubly linked list is a list where each element has pointers to the next element and the previous element.

#### Liskov's Substitution Principle

a notion in object-oriented programming that states that functions that use a base class must be able to use objects of a derived class without knowing it.

In other words, derived classes cannot remove any functionality from the interface of the base classes.

See [SOLID](#solid-solid).

#### Lisp

a family of languages that use impure functional programming paradigms.

Lisp, after Fortran, is the second-oldest high-level programming language in use. John McCarthy created Lisp in 1958 at MIT.

#### List

an ADT that is an ordered sequence of elements.

#### Literal

a value appearing directly in code.

#### Literal Expressions

creating data directly in code.

For example, `let data = 12; let data = { a:1 };`

#### Liveness

a concurrent application's ability to execute on time is known as its _liveness_.

#### Loch Ness Monster Bug, Bugfoot, Nessiebug

a bug that has only been seen by a single person.

#### Locks

enforcing limits on access to a resource to prevent deadlock and racing.

#### Loose Currying

type of currying where more than one argument may be passed per function call.

Loose currying is loose because strict currying only allows one argument per call.

**[⬆ back to index](#index)**

## M

#### Machine Epsilon

the upper bound on the relative error due to rounding in floating-point arithmetic.

#### Macro

a rule or pattern that specifies how a particular input sequence should be mapped to an output sequence.

Macros are often used for keystrokes, mouse movements, and clicks.

#### Macrotasks Queue

in JavaScript, the queue of execution contexts that are queried by the event loop.

See [microtasks queue](#microtasks-queue).

#### Mad Girlfriend Bug

when one sees something strange happening, but the software is telling you everything is fine.

#### Magic Characters, Magic Number, Magic Strings, Magic Values

values that are specified directly in application code that can affect the application’s behavior.

```javascript
return "you are correct sir!"; // magic string
```

#### Main Thread

all program processes must have at least one thread running, the main thread.

#### Makefiles

a file containing a set of directives used with build automation tools like Make, Ant, etc.

#### Mark Sweeping

a garbage collection technique.

The process works by the collector walking through the program from its root, marking all objects that are reachable from the program, and then garbage collecting all the remaining marooned objects. Typically, a costly operation for the garbage collector.

#### Markdown

a lightweight markup language used to convert text to HTML.

#### Masked Bugs

when two bugs cancel each other out and the software performs correctly.

#### Megamoth

the MEGA MOnolithic meTHod.

A megamoth can stretch over multiple screens in height. These are very, very scary.

#### Members, Class Members

the properties and methods of a class.

#### Memoization

saving previously calculated problems for lookup later, rather than recalculation.

#### Merge Sort

an algorithm used to sort a collection.

Roughly described, a merge sort is splitting an array until it consists of many arrays with lengths of one. Next, merge these sub-arrays back together incrementally, moving the smallest number to the far left and the largest to the far right.

#### Metaprogramming

programs that write or manipulate other programs, including themselves.

#### Method

a function that is defined on and can be executed by an object.

#### Microcontroller

a small integrated circuit used to control part of an embedded system.

A microcontroller often includes a processor, memory, and IO.

#### Microdata

a microformat for html.

Microdata can be used by search engines or any machine processing programs.

#### Microformat

simple conventions for embedding semantics in HTML to enable automated processing.

Typically, a microformat describes data on a web page so it can be processed by a script and exposed via an API.

#### Microtasks Queue

in JavaScript, a stack of queued functions that are executed before the event loop executes the next function on the macrotasks queue.

Promises in JavaScript use this stack.

See [macrotasks queue](#macrotasks-queue).

#### Mixins

essentially copying the members of an object to another object.

Mixins typically extend the interface of an object.

The inheriting object 'has-a' relationship with the mixin. Named by reference to an ice-cream hangout around MIT in the 1970's that would dump a spoonful of _mixins_ on ice cream.

#### MLOC

one-million (1000000) lines of code.

#### Mock, Stub

a simple implementation of an external interface used for testing.

A mock is a more complex version of a stub. Stubs are only complex enough to allow the test to execute.

#### Mocking

testing to simulate an intended or specific behavior.

Often, mocking is creating objects that simulate the behavior of dependencies that are difficult to incorporate into the test.

An example of mocking is putting a stub in for a data model.

#### Model – View – Controller (MVC)

a design pattern for building applications that organizes components into the model (data), the user interface (view), and a controller that handles user interaction.

MVC can be highly fractal, meaning that an application may involve many components broken into MVC parts.

#### Model View ViewModel (MVVM)

similar to MVC, but the controller, known as the ViewModel, is passive and knows nothing of the Model.

The ViewModel processes Model data and passes it to View for display.

#### Modifier Functions

functions that modify their arguments and can cause side effects.

See [pure function](#pure-function).

#### Modules

a collection of related functions.

#### Monad

a pointed and applicative functor that provides a `chain` method (also known as `flatMap` or `bind`), that maps and also joins nested monads by unwrapping the nested monad's value.

Monads are useful because it is common to build up a series of nested monads when mapping data through a pipeline. `chain` is a technique to flatten the result and make composition more convenient.

Monads come from category theory and satisfy mathematical laws to ensure they are composable.

Monads are notoriously difficult to describe to persons without the requisite background.

#### Monkey Patching, Duck Punching, Shaking The Bag

a technique to extend or change the behavior of code at runtime without changing the source code and only affecting the running instance of the program.

```javascript
let patchedFunc = func;
patchedFunc = function (x) {
  func(x + 1);
};
```

#### Monkey Testing

testing that generates random user input: clicks, swipes, keystrokes, with the sole purpose of finding issues with a program.

#### Monoid

- Some type A.
  - e.g. `String`
- An operation that takes two values of type A and combines them into one value of type A. The operation must satisfy associativity.
  - e.g. (operation) `concat("x", "y") = "xy"`
  - e.g. (associativity) `concat(concat("x", "y"), "z") === concat("x", concat("y", 'z")) === "xyz"`
- A value that is an identity for the operation.
  - e.g. (identity value) `""`
  - e.g. `concat("x", "") === "x";`

Note that type A is not the monoid. The monoid is the type, the operation over the type satisfying associativity, and the existence of an identity element for the operation.

#### Monte Carlo Method

a computational algorithm that relies on repeated random sampling to compute the results.

#### Mutable Data

data that can be modified after creation.

#### Mutator Method, Setter

a method that is designed to change data and not read it.

See [accessor method](#accessor-method-getter).

#### Mutual Recursion

when multiple functions recursively call each other.

**[⬆ back to index](#index)**

## N

#### Namespaces

a scope used to group related names.

#### Native Objects, Built-In Objects

objects provided by the programming language itself.

For example, `String, Number`.

#### new Operator

in languages that support the class pattern, the `new` operator triggers the creation of an instance of the class.

#### NGINX

an asynchronous reverse proxy web server.

NGINX is similar to Apache, but Apache is synchronous.

#### Ninja Comments

comments that are so invisible, so stealthy, they don't exist.

#### Non-Deterministic

when the same input conditions do not produce the same, predictable result.

More simply put, non-determinism is unpredictable behavior.

#### Non-Deterministic Finite Automaton (NFA)

a finite state machine in which for each input, the state to which the machine moves is non-deterministic.

#### Noop, NOP, no-op

a computer instruction that does nothing; short for "no operation."

Noop is pronounced "no op" (two syllables).

```javascript
function noop() {}
```

#### Nopping

zoning out.

Nopping derives from "no operation" and "nap."

#### NoSQL Databases

databases that store data in simple key -> value collections.

Typically, NoSQL databases have much faster write performance than SQL databases. MongoDB is a popular example.

#### Null

null is a specific value applied to a typed object.

A famous bug in JavaScript is `typeof null == "object"`

**[⬆ back to index](#index)**

## O

#### Object

a complex data type that couples data and the functions that operate on the data.

#### Object Acquaintance, Object Association

implies that an object merely knows of another object through a reference, usually passed as an argument.

#### Object Aggregation, Aggregation

different from object composition in that aggregated objects can exist independently of each other.

The classic example is UI components, where objects are combined to form larger structures, but child UI components can exist independently.

#### Object Code, Machine Code

the name for the program code that is created by a compiler.

#### Object Composition, Black-Box Reuse

very generally, creating parent objects (composites) that contain child objects to reuse functionality.

Composition implies ownership. When the parent object is destroyed, all child objects are also destroyed. If child objects can exist independently of the parent object, then this is aggregation.

Parent and child objects interact through each others' interfaces. The parent (composer) composes the child (composed).

The term _black_ in _black-box_ refers to the fact that only the interfaces are involved in the composition. Thus, the internals of the child objects are unknown or "black boxes."

#### Object Diagram

a UML diagram that shows a complete or partial view of the structure of a modeled system at a specific time.

#### Object Model

seen the following two definitions:

- Object-based programming in general; or
- The interface to a system that is modeled by using a collection of objects. The DOM is an example.

#### Object-Modeling Technique (OMT)

an object modeling approach designed in 1992.

#### Object-Relational Impedance Mismatch

refers to the difficulty in mapping relational database data (tabular) to objects/classes and vice-versa.

#### Object-Relational Mapping (ORM)

a technique that allows one to query and manipulate data from a database using an object-oriented paradigm.

#### Object Schizophrenia, `this` Schizophrenia

a complication arising from delegation in object-oriented programming where `this` can refer to more than one object depending on the context.

Object schizophrenia can be very confusing, especially when you are new to the concept of delegation and context.

#### OCaml

a programming language that is the principal implementation of the programming language Caml, created by Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy, Ascánder Suárez and others in 1996.

OCaml is strictly object-oriented and focused on type safety. It was initially named Objective Caml.

#### Opaque Tokens

tokens in a proprietary format.

Typically, only the issuing server can validate opaque tokens. This type of token contrasts with open standard tokens like JWTs.

#### Open Systems Interconnection (OSI)

a conceptual framework that describes the functions of a networking system by breaking up such a system into seven abstraction layers.

OSI was created in 1984.

#### Open/Closed Principle

this principle states that "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."

In other words, one should be able to alter the functionality of an entity without modifying its source code. Think of inheritance as an example.

See [SOLID](#solid-solid).

#### Operand

the values that an operator operates on.

#### Operator Overloading, Ad-Hoc Polymorphism, Ad Hoc Polymorphism

when operators are implemented in user-defined types with customized logic that is based on the types of arguments passed.

JavaScript does not support operator overloading.

#### Optimistic Locking

when files are not locked for editing.

If two people edit the same file in optimistic locking, the first committer wins. The second person must resolve any conflicts before committing their changes. Git is an example.

See [pessimistic locking](#pessimistic-locking).

#### Oracle

the code in a test that determines if the test passed.

#### Ordinal

relating to an item's position in a series.

#### Orthogonality

the degree to which changes to code in one place triggers changes in other places.

Higher orthogonality means changes are more isolated and trigger fewer changes elsewhere — basically, the degree of coupling in your code. In general, higher orthogonality is preferred.

#### Overflow

the result when a numerical result is so large that it cannot be presented in numerical format.

**[⬆ back to index](#index)**

## P

#### Paging

when a computer exchanges data in memory for data retrieved from a secondary source, typically a hard drive.

See [thrashing](#thrash-thrashing).

#### Pair Programming

an agile software development technique in which two programmers work together at one workstation.

One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed. The two programmers switch roles frequently.

#### Parallelism

when tasks run at the same time.

For example, when one executes tasks on a multicore processor.

See [concurrency](#concurrency).

#### Parameters

the variables listed as part of a function definition.

Do not confuse parameters with arguments, which are data passed to the function when the function is invoked.

```javascript
function fn(x, y) {} // parameters x and y

fn(1, 2); // fn called with arguments 1 and 2
```

#### Pareto Principle

when 20% of the causes are responsible for 80% of the effects.

For example, 20% of your code consumes 80% of your development time.

#### Parsing

figuring out the structure of a statement.

#### Partial Application

the process of taking a function that accepts more than one argument, binding values to some of the arguments, and returning a new function that only accepts the remaining, un-bound arguments.

In JavaScript, the _Function.prototype.bind_ method is a partial application function. Currying is a type of partial application.

```javascript
function x(a, b, c) {
  console.log(arguments);
}

// x has been partially applied
let partialX = (c) => x(1, 2, c);

partialX(3);

// could also use .bind
partialX = x.bind(undefined, 1, 2);
partialX(3);
```

#### Pattern Trap

a claim that inexperienced developers overuse design patterns.

#### Paving The Cowpath

taking an existing solution and formalizing it.

#### Perl

an interpreted language that is known for its text processing capabilities.

Designed in 1987 by Larry Wall.

#### Pessimistic Locking

when only one person can edit a file at a time.

In pessimistic locking, when a file is _checked out_, no one else can edit it.

See [optimistic-locking](#Optimistic-locking).

#### PHP

an interpreted server-side scripting language created for web development.

Originally PHP was an acronym for _Personal Home Page_, but now it refers to _Hypertext Preprocessor_. PHP was designed in 1994 by Rasmus Lerdorf.

#### Plain Old JavaScript Object (POJO)

a JavaScript object literal.

#### Plugin, Plug-in

a software component that adds features to an existing main program.

The main program provides services which the plugins can use. Plugins depend on the main program and do not function on their own — conversely, the main application functions independently of the plugins. Plugins can be added without requiring changes to the main program's source code.

#### Point Free Style, Point-Free, Pointfree, Tacit Programming

a style of programming where functions do not explicitly name the parameters (points) in function definitions.

Instead, the focus in point-free style is on using lots of little functions and composing functions.

```javascript
// not point free because the parameter `point` has been explicitly named in
// the definition of an anonymous function
let notPointFree = list.filter((point) => isTrue(point));

// point free because no parameter has been named in a function definition
let pointFree = list.filter(isTrue);
```

#### Pointed Functor

a functor that implements the pointed interface; a functor with an `of` (also known as `unit`) method that lifts the passed value into the functor's context.

In other words, the `of` method returns a functor of the same type with the passed value as the wrapped value for the returned functor.

#### Pointer

a pointer is a data type whose value refers directly to another value stored in memory.

Often, pointer is used interchangeably with _reference_.

#### Pokémon Exception Handling

when you Gotta Catch'em All.

#### Polyadic Function

a function that takes three or more arguments.

#### Polyfill

a type of shim that enhances legacy browsers with more modern features.

#### Polymorphic Functions

functions that can accept multi-typed inputs.

#### Polymorphism

polymorphism usually means either:

- Type A somehow derives from type B; or
- Type C implements type B's interface.

#### Post/Redirect/Get Pattern (PRG)

typical pattern for form submission to prevent resubmission when the back button is activated.

#### Postfix Notation, Reverse Polish Notation

when using an operator that increments or decrements a value, and the expression returns the _original_ value. For example, `i--; i++;`

```javascript
let i = 10;
console.log(i++); // 10
console.log(i); // 11
```

#### Predicate Function

a function that determines if something is true or false.

In other words, a function that returns a boolean value.

#### Prefix Notation, Polish Notation

when using an operator that increments or decrements a value, and the expression returns the new value.

For example, `--i; ++i;`

```javascript
let i = 10;
console.log(--i); // 9
console.log(i); // 9
```

#### Premature Optimization

"Premature optimization is the root of all evil (or at least most of it) in programming," said Donald Knuth.

#### Primitive Types

in JavaScript, `string`, `number`, `bigint`, `null`, `boolean`, `undefined`, `symbol`.

#### Principle of Least Astonishment/Surprise

software components should behave in a manner consistent with how users of that component expect it to behave.

In other words, users should not be astonished at the way software behaves. For example, clicking a "Delete" button should delete.

#### Principle of Least Privilege

components should only be able to access data and behavior that is necessary for their operation.

#### Problem Domain

the domain that defines the problem and constrains the solution.

In other words, the problem domain is only concerned with information relevant to solving the problem.

#### Procedural Programming

programming with a focus on breaking down problems into variables, data structures, and functions, as opposed to OOP, which focuses on breaking down problems into objects.

Procedural programming focuses on an imperative, top-down approach.

#### Procedure, Operation, Routine, Subroutine, Behavior, Function

these are all referring to the same concept: a bundle of functionality.

They may accept arguments; they may return values. Often, if the procedure returns a value, it is considered a function.

#### Process

an instance of a computer program that is being executed.

#### Program

a sequence of instructions, like a recipe.

#### Programming Paradigms

ways to organize programming languages based on their syntax, features, or preferred techniques.

Languages can be multi-paradigm. Some common examples are:

- Imperative.
  - Procedural.
  - Object-oriented.
- Declarative.
  - Functional.
  - Logic.
  - Mathematical.

#### Proper Tail Calls (PTC)

a tail call in JavaScript that satisfies the following requirements:

- The calling function is in strict mode.
- The calling function is either a normal function or an arrow function.
- The calling function is not a generator function.
- The calling function returns the return value of the called function.

#### Prototypal Inheritance

inheritance via a prototype object.

#### Prototype Chain

the chain of object prototypes for a particular object.

`A.prototype → b.prototype → c.prototype`

#### Prototype Development

creating rough drafts via incremental development.

#### Proxy Server

a server that acts as an intermediary for requests from clients seeking resources from other servers.

Proxy servers keep everything behind it hidden from the client.

#### Pseudo Code, Pseudocode

writing a natural language description of formal programming language code.

#### Pseudocode Programming Process (PPP)

practice that advocates large amounts of pseudocode before writing a function.

#### Pseudo Threading

dividing up large computations into small chunks that are then processed individually, which frees up the computer to run other tasks between chunks.

Pseudo threading is a way to allow the UI to refresh during a large computation without proper threading.

#### Psychological Distance

the ease with which one can differentiate two items.

#### Pull Request

asking a repository author to incorporate changes you have made to a forked version of their repository.

#### Pure Function

a function that returns a value that is only determined by its input values and has no observable side effects.

A pure function _maps_ input values to output values.

Most definitions also require that a pure function can not use mutable data outside of the scope of the function, even if it is not mutating it.

```javascript
function pure(a, b) {
  return a + b;
}

let c = 10;
function notPure() {
  return c + 10; // depending on free variable
}

function notPure2() {
  io.write(buffer); // side-effect
}

// i have seen some debate on whether the function below is pure; it depends on
// data outside functional scope, but the data is immutable; no clear answer
const d = 20;
function maybePure() {
  return d + 10;
}
```

#### PushState Ajax (PJAX)

web technique that uses AJAX requests to retrieve the HTML to update a web page.

AJAX avoids a hard web page refresh.

#### Python

an interpreted language designed to emphasize code readability and conciseness.

Designed in 1991 by Guido van Rossum. The name was inspired by Monty Python's Flying Circus sketch comedy show.

**[⬆ back to index](#index)**

## Q

#### Quality Without a Name (QWAN)

quality that one can recognize, but it is hard to describe; you know it when you see it.

#### Queue Data Structure

a data structure in which data is either added to the back or removed from the front.

Enqueue adds an item to the back of the queue, and dequeue removes an item from the front of the queue. Think of how a line to enter a movie theater works.

#### Quick Sort

an algorithm used to sort an array.

A random element is selected from the array, and then the array is partitioned so that all the numbers less than the element are placed before it and the ones greater than it are placed after it. However, if the randomly selected element isn't near the median, quick sort can be inefficient.

#### Quicksand Code

dive in and get stuck.

**[⬆ back to index](#index)**

## R

#### Race Condition

when program behavior is dependent on the timing of uncontrollable events.

Race conditions are not a desirable condition.

#### Radix

the numeric base, for example, base 10, base 8, etc.

#### Random Seed, Seed, Seed State

a number used to initialize a random number generator.

The seed can be a key that creates the same random number each time. Seeds are useful in cryptography.

#### Rasterization

converting non-bitmap images to bitmap (raster) images.

#### Reactive Programming

a paradigm where when data changes, other changes occur automatically.

Typically, in reactive programming, changes in the data model propagate to the view automatically. Data-binding is a specific form of Reactive Programming.

#### Read–Eval–Print Loop (REPL), Language Shell

the command line.

#### Reality 101 Failure

when a program performs correctly, but it turns out that the problem was misunderstood, and the program is essentially useless.

#### Recursive, Recursion

when the solution to a problem depends on solutions to smaller instances of the same problem.

The typical example of recursion is when a function calls itself.

#### Reduce, Folding, Reduction Operation

an operation that takes an iterable and reduces it down to a single value.

Reduce typically takes two arguments: (1) the reducer function and (2) the initial value. The reducer function's return value is assigned to the accumulator on each iteration and ultimately is the final returned value.

Reduce is sometimes described as _folding_ multiple values together into one value.

```javascript
// example for arrays
const initialValue = 0;
const sum = [1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
); // 6
```

See [reducer function](#reducer-function-reducer).

#### Reducer Function, Reducer

a function that takes an accumulation and another value as arguments; and returns a new accumulation.

Reducers are often used to carry out a reduce operation.

```javascript
function reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

const sum = reduce(1, 2); // 3
```

#### Refactoring

changing existing source code to improve its design/structure without changing its functionality.

Refactoring is typically done to improve readability, ease of maintenance, conciseness, or other design-focused goals.

#### Reference

a pointer to a non-primitive data type.

For example, when a variable points to an object, it has a reference to the object.

See [binding](#bindings).

#### Reference Counting Garbage Collection

a memory freeing technique in which objects are garbage collected when no other objects have references that point to them.

See [weak reference](#weak-reference).

#### ReferenceError

the ReferenceError object represents an error when a non-existent variable is referenced in JavaScript.

#### Referential Integrity

a relational database concept that states that table relationships must always be consistent.

In other words, any foreign key field must agree with the primary key that is referenced by the foreign key.

#### Referential Transparency

a functional programming concept that requires that a function call can be replaced with its return value with no observable difference.

#### Reflection, Reflexivity

the process by which a program can observe and modify its own structure and behavior.

#### Refuctoring

a technique used to take clean code and make it so only you can maintain it.

#### Regression Testing

verifying that previously functioning software still performs correctly after changes.

#### Relational Data Stream Management System (RDSMS)

a table based database design that uses SQL to query and insert data.

#### Remote Procedure Call (RPC)

a protocol that one program can use to trigger a procedure call on another program located on another network.

A web service can be a form of RPC.

#### Repositories, Repository

a central store of data that clients can connect to and share data.

#### Representational State Transfer (REST)

an architectural design for creating web services.

Requires adherence to a number of invariants. In the interest of simplicity, RESTful systems are often web services that use POST, GET, PUT, DELETE (and other) verbs combined with HTTP based URLs to create a web API.

#### Rest parameters

the rest parameter syntax in JavaScript allows for representing an indefinite number of arguments as an array.

```javascript
// ...args is the rest parameter
function fn(a, b, ...args) {
  console.log(args);
}

fn(1, 2, 3, 4, 5);

// logs [3, 4, 5]
```

#### Reverse Proxy

a server that grabs data from other servers on a private network and forwards the data to the client.

See [forward proxy](#forward-proxy).

#### RHS

refers to the right-hand side of an assignment.

For example, `let a = 10`. The RHS is `10`.

#### Robbing An Intellectual Bank

taking good ideas from a source that is not you.

#### Rubber Ducking

explaining a problem to a nodding duck to reason through it and possibly answer your question.

#### Ruby

a mostly interpreted, high-level, reflective, OO language that focuses on user productivity and the principle of least astonishment.

The name Ruby was partially a reference to the birthstone of one of the creator's colleagues.

Ruby was designed in 1995 by Yukihiro Matsumoto in Japan. Mr. Matsumoto is also a Mormon, which must be unique in Japan.

#### Run-To-Completion

functions that are executed completely before any other functions are executed.

**[⬆ back to index](#index)**

## S

#### Safe Programming Language

a language that does not provide low-level access to memory or CPU for the operating environment.

JavaScript in a web browser is "safe."

#### Salt

in cryptography, an additional piece of data used while hashing to make the digest more secure.

#### Same Origin, Same-Origin

two URLs have the "same origin" if they have the same protocol, domain and port.

#### Scaffolding

code used during program development that is not part of the final program.

#### Scalar Data

data that holds only one value at a time.

For example, scalar data is strings or numbers but not arrays.

#### Scope

the variables and bindings that are accessible at a particular point in code.

#### Scripting Language

a language designed to control software applications.

JavaScript is a scripting language because it controls the web browser. Often, scripting languages are interpreted rather than compiled.

#### Scrum

scrum is a flavor of Agile software development.

#### Sealed Class

classes that cannot be inherited from or have members added to them.

#### Sentinel Value, Flag Value

a value that is a condition of termination for an algorithm.

In JavaScript, an example is `-1` for `indexOf`.

#### Sequence

generally, a collection of values where the order is essential.

#### Sequence Diagram

a diagram that depicts control flow as a function of execution time.

#### Sequential Programming

programming line by line without functions.

For example, C64 basic is sequential programming.

#### Serialize, Marshalling

the process of converting data into a form that can be stored or transmitted across a network and used in another computer environment.

Marshalling is a specific type of serialization whose definition depends on the particular context. For example, in some languages, marshalling specifically refers to serialization when sending objects remotely.

Often, serializing data means to encode it as a string for transmission over the internet to a web server.

#### Server Affinity

the ability of a load balancer or router to send a user's request to the same server where their session was initiated.

#### Set

generally, a collection of values with no particular order.

#### Shadowing, Variable Shadowing

in JavaScript, refers to a variable in an inner scope that has the same name as a variable in an outer scope and thus controls the name reference.

Shadowing can also refer to overriding in class inheritance.

#### Shallow Copy

copy an object, but do not copy any embedded objects, only copy references to the embedded objects.

#### Shallow Equality

when two variables or objects are pointing to the same thing in memory.

#### Shim

a small library that transparently intercepts API calls and changes the arguments passed, handles the operation itself, or redirects the operation elsewhere.

Shims are frequently used to handle browser deficiencies.

#### Short-Circuit Evaluation, Short-Circuit Operators

using the logical OR (`||`) to end evaluation of the expression and return.

#### Shoutbox

an internet forum where the most recent comments go on the top rather than a thread.

#### Side Causes, Indirect Inputs

when a function is affected by changes to free variables.

Free variables are _indirect inputs_.

#### Side Effects, Indirect Outputs

when a function call causes an observable effect outside the function.

The observable outside effect being the _indirect output_. The classic example is changing global data in a function call.

#### Signed Cookies

cookies that come with a digest to confirm that the cookie value was not tampered with.

Servers test the signed cookie by combining the cookie value with a secret key, hashing the combined string, and then checking that the resulting digest equals the digest the cookie returned. This process validates that the cookie's value has not changed.

#### Signed Integer

an integer that can have a negative value.

#### Single Page Application (SPA)

web apps that load a single HTML page and dynamically update the page without a full page reload.

#### Single Responsibility Principle

every module or class encapsulates and has responsibility over a single aspect of a program.

See [SOLID](#solid-solid).

#### Smalltalk

a compiled, object-oriented, dynamically typed, reflective programming language.

Smalltalk programs are usually compiled to bytecode. Smalltalk first appeared in 1972 and was designed at Xerox PARC.

#### Smug Report

a bug submitted by a person with an exaggerated sense of self-worth.

#### Smurf Naming Convention

when many classes have the same prefix: SmurfView, SmurfModel, SmurfButton, etc.

#### Snake Case

one_two_three

#### Snowflake Server

a server configuration that is difficult to reproduce.

#### SOLID, S.O.L.I.D.

a famous mnemonic acronym for design principles intended to make better software.

- [Single responsibility principle](#single-responsibility-principle).
- [Open/closed principle](#openclosed-principle).
- [Liskov substitution principle](#liskovs-substitution-principle).
- [Interface segregation principle](#interface-segregation-principle).
- [Dependency inversion principle](#dependency-inversion-principle).

#### Software Accretion

incremental software development.

#### Software Rot, Code Rot

increasing disorder and degradation in software.

#### Solution Domain

the domain that concerns solving a problem.

#### Sparse Arrays

arrays with holes and no values.

```javascript
const arr = [, ,];
arr.length == 3;
arr[0] == undefined;
```

#### Spooler

the part of the operating system that keeps track of pages as they are waiting to be printed and sends them to the printer when the printer is available.

#### Spread Syntax, Spread Operator

in JavaScript, it allows iterables like arrays, strings, etc., to be expanded in places where zero or more arguments or elements are expected.

Also, the spread operator can spread the properties of one object to a different object.

```javascript
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5, 6]; // spread iterables

console.log(newArr.length); // 6

let obj = { a: 1, b: 2, c: 3 };
let newObj = { ...obj, d: 4 }; // spread properties

console.log(newObj); // { a: 1, b: 2, c: 3, d: 4 }
```

#### Stack

a _last in, first out_ abstract data type that is characterized by push/pop.

Imagine creating a stack with blocks. One adds and removes blocks from the top only: last in, first out.

See [queue](#queue-data-structure).

#### Stack Frame

a frame on the call stack that represents an active function call and its input data.

In JavaScript, stack frames are often named execution contexts.

#### Stack Overflow

a stack overflow occurs when the call stack consumes more memory than is available.

#### Stack Trace, Stack Traceback, Traceback

a report of the active stack frames during the execution of a program.

#### State

all the stored information to which a program can access at a given instant in time.

#### Statement

a legal command that the programming language can understand.

A statement is a command to do something. Typically, it does not return a value in contrast to expressions. Also, unlike expressions, statements can have side-effects.

#### Statement Completion Value

in JavaScript, this is what is reported in the console after a statement.

The statement completion value is only accessible via eval calls and can report unintuitive values.

#### Static Binding, Early Binding, Late Binding

bindings in which the methods called on an object are known and fixed at compile time.

See [dynamic binding](#dynamic-binding-late-binding).

#### Static Memory Allocation, Statically Allocated

when memory is allocated for a fixed duration.

#### Static Typing

a type that is checked at compile time.

#### Stochastic Process

a process that has random elements in it.

#### Stream

a flow of data over time.

#### Strong Reference

a strong reference to data prevents data from being removed by the garbage collector.

In JavaScript, references are strong by default.

See [weak reference](#weak-reference).

#### Strict Equality

a comparison where no type conversion on the values is performed before the comparison is made.

In JavaScript, the `===` operator performs strict quality comparisons.

#### Stringly Typed

using an implementation that relies on strings when better options are available.

Stringly typed is a derogatory term.

#### Structured Query Language (SQL)

a standard language used to access and update data in table based databases.

Designed in 1974 by Donald D. Chamberlin and Raymond F. Boyce at IBM.

#### StUdLyCaPs

mixed case with no semantic significance with regards to capitalization.

The name derives from the sarcastic implication that it was used by the writer to be cool. For example, "thaTDuDEisCoOL".

#### Symmetric Key Algorithms, Symmetric Cryptography

an algorithm for cryptography that uses the same key for encryption of plaintext and decryption of ciphertext.

#### Syntactic

relating to syntax.

#### Syntactic Sugar, Sugar

syntax within a programming language that is designed to make things easier to read or to express.

It makes the language "sweeter." The `class` construct in JavaScript is often (incorrectly) deemed to be purely syntactic sugar.

#### Syntax

defines the allowable sequence of characters in code.

#### System Under Test (SUT)

refers to a system that is being tested for correct operation.

**[⬆ back to index](#index)**

## T

#### Tacit Knowledge

knowledge that is difficult to transfer to another person.

#### Tail Call, Tail Recursion

when a function returns a functional call.

```javascript
function foo() {
  return 10;
}

function bar() {
  // foo() is the tail call
  return foo();
}
```

#### Tail Call Optimization (TCO)

javaScript can optimize code that uses a proper tail call to limit the growth of the call stack.

See [proper tail call](#proper-tail-calls-ptc).

#### Technical Debt, Design Debt

choosing an easy solution now that will cost reworking time later.

If technical debt is not paid, it can accumulate interest, meaning even more work in the future to fix.

#### Temporal Dead Zone, TDZ

in JavaScript, an ES2015 concept that applies to `const` and `let`.

Their declarations still hoist, but they throw a ReferenceError when accessed before being declared, instead of returning undefined as a `var` variable would.

```javascript
// demonstrates that let/const still hoists
let x = "outer scope";

(function () {
  console.log(x); // throws a ReferenceError
  let x = "inner scope";
})();
```

#### Tenured Grad Student

one who has been in graduate school for 10 years because they are a "ten-yeared" student. Also, can refer to a seventh-year student because they have most likely been around longer than any untentured faculty.

#### Ternary Operator, Conditional Operator

an operator that takes three arguments.

#### Test Coverage, Code Coverage

the percentage of the total source code of a program that is executed when a test suite runs.

The percentage of the total program is commonly determined by measuring how many functions are invoked or how many statements are run.

#### Test Driven Development (TDD)

a software development process that can be summed up as writing tests before writing program code, next writing the program code that passes the test, next refactoring as necessary, and then repeating the process.

#### Test Suite

a collection of test cases used to analyze the behavior of a program.

#### Tethering

connecting electronic devices.

#### Thin Client

a computer that connects to another computer and depends heavily on the other computer to function.

The classic client-server model.

#### this, self, me

a language construct in which the `this` variable represents the context of the function call.

`this` is not lexical, meaning that it is not bound at compile time. Instead, `this` is set at runtime.

#### Thrash, Thrashing

thrashing occurs when a computer is in a constant state of paging.

Thrashing slows down a computer's operation.

#### Thread

the smallest unit of processing that can be scheduled by the operating system.

#### Third Party Cookie, 3rd Party Cookie

when a site that is not the currently visited site adds a browser cookie.

Third-party cookies are never set by a script included on the page.

For example, when you visit `site.com` but a banner ad for `ads.com` pushes a tracking cookie to you, `ads.com` has pushed a third party cookie to you.

#### Throttling

to enforce a maximum number of times that a function can be called over an interval.

As in "execute this function at most once every 100 milliseconds." Throttling is useful to slow down processing to prevent application lockup.

See [debouncing](#debouncing).

#### Throwing An Exception, Raise An Exception

creating an exception object and handing it to the runtime system.

Such exceptions typically propagate upwards if not handled.

#### Thunk

an argumentless function that performs an action when called.

Often, thunks are created via a return from a partially applied function.

```javascript
function setupUIWrite(data) {
  return () => io.write(data);
}

let thunk = setupUIWrite("new data");

thunk();
```

#### Tier

a real, physical computing resource where abstract layers are deployed.

A client-server relationship is a two-tier system.

#### TL; DR;

too long, didn't read.

#### Tokens

the basic elements of a language: words, letters, constants, operators, etc.

#### Top-Down Programming, Stepwise Design, Decomposition

an approach that involves breaking a high-level system into subsystems and then breaking those subsystems into more subsystems and so forth until you reach the basic elements of the system.

#### Tracing

specialized use of logging to record information about a program's execution.

Tracing is logging information for debugging purposes.

#### Train Wrecks

when a series of method calls are chained together.

Train wrecks may violate the law of demeter and are seen by some as an anti-pattern.

For example, `obj.a().b().c()`

#### Train-Case, Kebab-Case, Spinal-Case

writing with hyphens separating words.

#### Tramp Data

data that is passed from the first function to a second function and is not used by the first function.

#### Trampolining

a technique used to limit the growth of the call stack by not making the final continuation call inside the called function, but rather exit and return the continuation call to a trampoline that then loops and invokes the continuations.

Imagine how a recursive function keeps adding to the call stack with each recursive iteration. Because of this, memory consumption can grow out of control. Now, instead of immediately calling the recursive function, return the intent to call the recursive function to a trampoline, which allows the initial function to end, get popped off the call stack, and then the trampoline calls the recursive function. This technique keeps the call stack from growing.

#### Transducer Function, Transducer

a pattern that involves functions that accept a reducer as input and return a different reducer.

Unlike reducers, which cannot be composed because they have an arity of > 1, transducers can be composed because they have an arity of one. The composition of transducers can be useful to only iterate over an iterable once instead of creating intermediate step iterables when, for example, performing multiple mappings or reduce operations.

```javascript
const transducer => reducer => {
  return (accumulator, value) => {

  }
}
```

#### Transactions

a block of SQL statements executed together.

Changes are only made at the end after the COMMIT statement. If the COMMIT statement fails to execute, the data is automatically rolled back.

#### Transcompiler, Transpiler, Transpiling

a compiler that converts one language to another when both languages are at approximately the same level of abstraction.

An example would be the TypeScript to JavaScript compiler.

#### Tree

a tree is a type of graph data structure that is hierarchical and unidirectional.

Trees have a root value and subtrees of children and are represented as a series of linked nodes. Each node has a value and then pointers to its children. A common example is a binary tree, which is a tree where a parent node has 2 child nodes at most.

#### Troff

a document processing system that has been supplanted by LaTeX.

#### Tuple, Tuple Data Type

an ordered sequence of elements.

A tuple is similar to an array with ordered indices. In Python, they are also immutable. JavaScript does not have tuples.

#### TypeError

in JavaScript, the TypeError object represents an error when an operation could not be performed.

Usually, a TypeError is thrown because a value was not of the expected type.

#### Typographic Ligatures

when multiple characters combine into a single character.

The ampersand "&" character developed from a Latin ligature in which e and t were combined.

**[⬆ back to index](#index)**

## U

#### Unary Function

a function that takes one argument.

#### Unary Operator

an operator that takes a single operand.

Examples: `i+; delete i; typeof i;`.

#### undefined

in JavaScript, this is a type.

Variables that are declared but not assigned to anything are automatically `undefined`.

#### Unhandled Exceptions

an exception that has propagated up through the entire program without being handled and has triggered a runtime error.

#### Unicorny

a feature that is proposed so early in the planning phase that it may as well be imaginary.

#### Unified Modeling Language (UML)

a general-purpose modeling language that provides a standard way to visualize the design of a system.

#### Uniform Resource Identifier (URI)

a named identifier for a resource that does not necessarily indicate how to access the resource.

See [URL](#uniform-resource-location-url).

#### Uniform Resource Location (URL)

a URI that provides the means of accessing the resource.

For example, `https://resource.com/resource` is a URL because it contains the network location that can access the resource. All URLs are URIs, but not all URIs are URLs.

#### Union Data Type

a data type that specifies two or more primitive data types that a variable can reference.

#### Unit Testing

testing each part of the program separately.

Unit tests are typically the most numerous tests for a project.

#### Unsigned Integer

an integer that cannot be negative.

#### Upstream

sending code back to the original developers of the software.

Upstream code is usually a patch or bug fix for the original codebase.

#### UTF-8

character encoding that uses 8-bit code units to encode UTF code points.

UTF-8 is a variable-length encoding that uses one to four bytes per character. Approximately 90% of the web uses this encoding.

#### Utility Functions, Utilities

functions that handle common, often reused tasks and usually do not have side-effects.

Generally speaking, utility functions are more generalized and less specific than other functions.

**[⬆ back to index](#index)**

## V

#### Variable Live Time

the number of lines of code that a variable is used.

Generally, lower variable live time is better.

#### Variable Span, Variable Distance

the number of lines between successive references to the same variable.

Generally, lower variable span is better.

#### Variadic

an operator or function that can take a variable number of arguments.

#### Variadic Function

a function that takes a variable number of arguments.

#### Vertical Scaling

increasing the capacity of a single server, such as using a more powerful CPU, adding more RAM, or increasing the amount of storage space.

Since it is a single server that is vertically scaled, there is a practical maximum for vertical scaling.

See [horizontal scaling](#horizontal-scaling).

#### Visual Basic, Visual Basic .NET (VB.NET)

a compiled and object-oriented language that supports Microsoft's Component Object Model.

Visual Basic first appeared in 1991 and was designed by Microsoft.

#### Virtual Functions, Virtual Methods

a function or method whose behavior is intended to be redefined in derived classes.

#### Virtual Machine

software that emulates a computer environment.

#### Void, Void Type

in JavaScript, the `void` operator evaluates the given expression and returns `undefined`.

In some other languages, like C, when a function returns a void type, it is returning an empty result.

**[⬆ back to index](#index)**

## W

#### Waterfall

a sequential and non-iterative process where software development flows down from one level to the next.

A typical waterfall would be Requirements -> Design -> Implementation -> Testing -> Maintenance. Agile is a different approach.

#### Weak Reference

a reference to data that does not protect the data from the garbage collector.

Weak references are not counted by the garbage collector.

#### Web NFC

provides a low-level API that gives web sites the ability to read and write to nearby near-field communication (NFC) devices.

#### Web Services

specific functionality offered by a server to connected clients.

#### WebAssembly, Wasm

an assembly-like language that uses a binary format that web browsers can execute.

WebAssembly is intended to be fast.

#### Webhook, Web Callback, HTTP Push API, Reverse APIs

a server to server event notification that is typically accomplished via HTTP POST.

For example, server B asks server A to send a message to `http://serverB.com` whenever Jake posts content. Jake posts content. Server A sends a message to server B. Server B now knows Jake posted content.

#### White Box Testing

testing both the implementation and functionality of software.

White box testing is considered bad form because the test and implementation are coupled and will need to change together.

See [black box testing](#black-box-testing-specification-based-testing).

#### Why Isn't Sam Coding Anything? (WISCA), Why Isn't Mary Programming? (WIMP)

complaint leveled at programmers when they are working on non-programming tasks.

#### Wicked Problem

a problem that is difficult to solve because of incomplete, contradictory, and changing requirements that are often difficult to recognize.

Solving one aspect of a wicked problem may create other problems.

#### WISDOM

useful acrostic to effectively communicate ideas to an audience:

- _What_ do you want them to learn?
- What is their _interest_ in what you've got to say?
- How _sophisticated_ are they?
- How much _detail_ do they want?
- Whom do you want to _own_ the information?
- How can you _motivate_ them to listen to you?

#### Write Everything Twice (WET), Waste Everyone's Time (WET)

a tongue-in-cheek way to describe the result of not being DRY.

#### What You See Is What You Mean (WYSIWYM)

an editor where users edit structured data rather than the visual presentation.

**[⬆ back to index](#index)**

## X

**[⬆ back to index](#index)**

## Y

#### You Aren't Gonna Need It (YAGNI)

principle that states that functionality should not be added until necessary.

Adding functionality before it is needed runs a high risk of wasted time and money.

#### Yak Shaving

performing necessary tasks before a project can progress.

Also, yak shaving is used to denote finishing a simple task.

#### Yoda Conditions

flipping the typical order of the operands in a comparison.

```javascript
// Normal person: "A Jedi does not crave these things"
if (foo === 10) {
}

// Yoda: "A Jedi craves not these things"
if (10 === foo) {
}
```

**[⬆ back to index](#index)**

## Z
