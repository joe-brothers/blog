---
title: How to remove a file from git, but keep local
date: 2022-11-05T17:49:15.875Z
tags:
  - git
---
```shell
# single file
git rm --cached file_to_remove.txt

# single directory
git rm --cached -r directory_to_remove
```

I﻿f you want to remove  local file (e.g. `.java-version` for jenv), use `git rm` with `--cached` option.

> \--cached
>
> Use this option to unstage and remove paths only from the index. Working tree files, whether modified or not, will be left alone.
>
> ([git rm documentation](https://git-scm.com/docs/git-rm))