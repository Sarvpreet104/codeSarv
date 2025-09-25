---
title: Variables in Python
description: All about variables in python language. We will see what are they and how variables can be useful in python.
author: Sarvpreet Singh
date: 25-09-2025
order: 4
---

## Variables

Variables are named container in memory that holds a value of a certain type. The value can be accessed in a program by calling the name of the varible that is defined.

Variables are like containers which can hold a value. Hence, they can be very useful when we need to store a value (such as number, string, boolean etc.) in a program.

## Syntax of a variable in python

To use a variable in python, you can write something like this.

```python
a = 1
```

Here we have name of a variable in left-hand side **a** (it can be anything) and on other side of equal to sign, we have a numerical value **1** assigned to **a**.

In similar fashion, we can define as many variables as we want to have in a program.

```python
a = 1
b = 67
```

## Accessing variables in program

We can use these values by typing the name of the variable. We will be printing them on terminal.

```python
a = 12
b = 8
print(a)
print(b)
```

**NOTE:** To access a variable in **print()** you don't have to enclose it in quotes (like "a"). As if written in quotes, it would be a string that would print **a** as it is not 8 (it's value).

## Use of variables

Variables can be used in such ways:

- Storing values that will be used later in program.

```python
x = 1
y = 2

# using x and y for addition
print(a + b)
```

- Storing results of a calculation

```python
cal = 2*2-3
print(cal) # output: 1
```

## Data types in Python

Data type defines what type of value a variables can hold.

### We have these common data types:

- Integers **(int)**: Stores values like ...,-3,-2,-1,0,1,2,3,...
- Floating Point numbers **(float or double)**: Stores values like 1.23, 0.42, 444.211 ,....
- Character **(char)**: Stores values like 'a', 'b', 'c' ...
- Boolean **(bool)**: Stores values like True or False
- String **(str)**: Stores sequence of characters like "codeSarv", "You are great", etc.

However, python is a dynamically-typed language which means it automatically detects and accepts whichever type of value is being stored, at runtime.

So you can store any kind of value in a varaible.

```python
a = 1 # int
b = 2.2 # float
c = 'a' # str
d = 'a rainy day' # str
e = True

print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
```

The **type()** function is a built-in function that returns type of the value passed in it.

To access the value you can alway do this.

```python
# accessing values of a, b, c, d and e variables defined earlier
print("Value of a = ", a)
print("Value of b = ", b)
print("Value of c = ", c)
print("Value of d = ", d)
print("Value of e = ", e)
```

The content enclosed in quotes is **string** that would print as it is. Those which written without quotes are **variables** and their value would get printed. You can print multiple items in one print statement by separating them with commas **,**.
