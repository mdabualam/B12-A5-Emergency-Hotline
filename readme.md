**Answer the following questions clearly:**

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer**:
**getElementById**: Finds a single element using its uniq 'id' attribute.
**getElementsByClassName**: Finds all elements that have the same class name.
**querySelector**: Finds the first single element that matches with the css selector.
**querySelectorAll**: Finds all elements that matches with the css selector.

2. How do you **create and insert a new element into the DOM**?

**Answer**:
Creating and inserting a new element into the DOM we need to follow three steps:
**Step-1: Create the element**
**Step-2: Set it properties or content**
**Step-3: Set the new element to the parent**

3. What is **Event Bubbling** and how does it work?

**Answer**:
**Event bubbling** is a concept in JavaScript that explains how events propagate through the Document Object Model(DOM) after being triggered.

When an event occurs on an element, it doesn't just affect that element alone. Instead, the event starts from the innermost element and then moves upward through its ancestors in the DOM tree, one by one until it reaches the root.

4. What is **Event Delegation** in JavaScript? Why is it useful?

**Answer**:
**Event Delegation** is a technique in JavaScript where instead of attaching event listeners to multiple child elements, it is attached a single event listener to their parent element. The parent can then detect events coming from its children using the concept of bubbling.

Event Delegation leverages event bubbling to handle events efficiently at a higher-level element instead of on many child elements. It increases the efficiency and saves memories and improves performance. It helps also to write cleaner codes.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**Answer:**
**preventDefault()**: Stop the default action of an element from happening.
It prevents the browser's built-in behavior.

**stopPropagation()**: Stops the event from bubbling up through the DOM.
It prevents the event from moving to parent elements.
