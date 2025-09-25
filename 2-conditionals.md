---

# 🖥️ Lesson: Conditionals in JavaScript

## What Are Conditionals?

Conditionals are like **decision makers** for your code.
They let your program ask questions like:

* *“Is this true?”*
* *“If yes, do this. If not, do something else.”*

It’s just like real life:

* If it’s raining, bring an umbrella.
* Otherwise, wear sunglasses.

---

## Example 1: Simple `if` / `else`

```js
const age = 17; 
if (age >= 18) {
  console.log("They are an adult");
} else {
  console.log("They are a child");
}
```

👉 What’s happening here?

* The program checks: **is `age` greater than or equal to 18?**
* If yes → prints `"They are an adult"`.
* If not → prints `"They are a child"`.

**Analogy:**
Imagine a roller coaster sign:

> “You must be 18 or older to ride.”

If you’re old enough, you get on. Otherwise, you don’t.

---

## Example 2: `else if` Chain

```js
const age = 17;

if (age >= 65) {
  console.log("Senior Citizen");
} else if (age <= 18) {
  console.log("They is child");
} else {
  console.log("They are an adult");
}
```

👉 Here we have **multiple conditions**:

1. If age ≥ 65 → Senior Citizen
2. Else if age ≤ 18 → Child
3. Else → Adult

**Analogy:**
Think of the cafeteria line:

* If you’re a teacher, you go first.
* Else if you’re a little kid, you go second.
* Otherwise, you go in the regular line.

---

## Example 3: Complex Conditions with `AND` and `OR`

```js
let age = 35;
let citizen = true;

if (age >= 35 && citizen === true) {
  console.log("Can run for President");
} else {
  console.log("cannot run");
}
```

👉 Explanation:

* `&&` means **AND** → both must be true.
* You must be **at least 35 years old** AND a **citizen**.

**Analogy:**
Think of joining a sports team:

* You need **to be on time AND have your uniform**.
* If you’re missing one, you can’t play.

---

## Example 4: Using `OR` and `NOT`

```js
let hasKey = true;
let hasMagic = false;
let isBanned = false;

function enter(hasKey, hasMagic, isBanned) {
  if ((hasKey || hasMagic) && !isBanned) {
    console.log("can enter");
  } else {
    console.log("cannot enter");
  }
}
enter(hasKey, hasMagic, isBanned);
```

👉 Explanation:

* `(hasKey || hasMagic)` → `||` means **OR** → either having a key OR having magic works.
* `!isBanned` → `!` means **NOT** → they must not be banned.
* Together → the player can enter if they have a key or magic, and they are not banned.

**Analogy:**
It’s like a school dance:

* You can get in with a **ticket OR VIP pass**,
* BUT you **cannot be suspended**.

---

## Example 5: `switch` Statement

```js
const key = 3;

switch (key) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("weds");
    break;
  case 4:
    console.log("thurs");
    break;
  default:
    console.log("time is weird");
}
```

👉 Explanation:

* `switch` is like a menu of choices.
* If `key` is `3`, the program prints `"weds"`.
* If nothing matches, it runs `default`.

**Analogy:**
Think of pressing buttons on a vending machine:

* Press 1 → Chips
* Press 2 → Candy
* Press 3 → Soda
* If you press a weird number → “Invalid selection.”

---

## ✨ Key Takeaways

* `if` checks a condition.
* `else` runs when the condition is not true.
* `else if` lets you check more than one condition.
* `&&` = AND → both must be true.
* `||` = OR → only one needs to be true.
* `!` = NOT → flips true/false.
* `switch` is good for checking lots of exact values.

---