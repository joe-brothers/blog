---
title: Java List initialization
date: 2022-12-09T08:18:52.501Z
description: ""
tags:
  - java
  - list
---
T﻿here are several ways to initialize a List with values.



## L﻿ist::add, addAll

```java
// (1)
List<String> list = new ArrayList<>();
list.add("first");
list.add("second");

// (2)
list.addAll(Arrays.asList("a", "b"));
```

You can add items to list one by one with `add` method, or you can add list with `addAll` method.



## A﻿rrays.asList (Before Java 8)

```java
List<String> list = Arrays.asList("first", "second");
```

Arrays.asList method accepts `varargs` parameter.



## S﻿tream to List (Java 8)

```java
List<String> list = Stream.of("first", "second", "third")
  .collect(Collectors.toList());
```

Stream collect methods converts Stream to Collection.

Generally, it creates mutable collections. If you want to make immutable list, consider using `toUnmodifiableList()` method.



## F﻿actory Methods (Java 9)

```java
List<String> list = List.of(1, 2, 3, 4);
```

Since Java 9, you can use several handy factory methods.