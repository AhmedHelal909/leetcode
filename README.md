<div align="center">

# 🧠 LeetCode Solutions

**Clean solutions. Clear explanations. Real understanding.**

[![Solved](https://img.shields.io/badge/Solved-0-brightgreen?style=for-the-badge&logo=leetcode)](https://leetcode.com/YOUR_USERNAME)
[![Easy](https://img.shields.io/badge/Easy-0-00b8a3?style=for-the-badge)](#-progress)
[![Medium](https://img.shields.io/badge/Medium-0-ffb800?style=for-the-badge)](#-progress)
[![Hard](https://img.shields.io/badge/Hard-0-ff375f?style=for-the-badge)](#-progress)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

[Profile](https://leetcode.com/YOUR_USERNAME) · [Problem Index](#-problem-index) · [How to Contribute](#-contributing)

</div>

---

## 📖 About

This repository is my personal journey through LeetCode. Every problem includes:

- ✅ A working, tested solution
- 💡 A step-by-step explanation of the **intuition** behind it
- ⏱️ **Time and space complexity** analysis
- 🔁 Alternative approaches (brute force → optimized) when they teach something

> The goal isn't to collect green checkmarks. It's to **understand patterns** so that new problems feel familiar.

---

## 📊 Progress

| Difficulty | Solved |
|:----------:|:------:|
| 🟢 Easy    | 0 |
| 🟡 Medium  | 0 |
| 🔴 Hard    | 0 |
| **Total**  | **0** |

---

## 🗂️ Repository Structure

```text
leetcode-solutions/
├── README.md
├── problems/
│   ├── 0001-two-sum/
│   │   ├── README.md        # Problem statement + explanation
│   │   ├── solution.py      # Solution code
│   │   └── test_solution.py # Tests
│   ├── 0020-valid-parentheses/
│   └── ...
├── patterns/                # Cheat sheets per technique
│   ├── two-pointers.md
│   ├── sliding-window.md
│   └── ...
├── templates/
│   └── problem-template.md
└── LICENSE
```

---

## 🧩 Problem Index

| # | Title | Difficulty | Pattern | Solution |
|:-:|-------|:----------:|---------|:--------:|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | 🟢 Easy | Hash Map | [Python](problems/0001-two-sum/solution.py) |
| 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | 🟢 Easy | Stack | [Python](problems/0020-valid-parentheses/solution.py) |
| 3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 🟡 Medium | Sliding Window | [Python](problems/0003-longest-substring/solution.py) |

> ➕ Add a new row every time you solve a problem.

---

## 🎯 Patterns Covered

| Pattern | When to Use It | Notes |
|---------|----------------|-------|
| **Two Pointers** | Sorted arrays, pairs, palindromes | [Cheat sheet](patterns/two-pointers.md) |
| **Sliding Window** | Subarrays/substrings with a constraint | [Cheat sheet](patterns/sliding-window.md) |
| **Hash Map** | Fast lookups, counting, complements | [Cheat sheet](patterns/hash-map.md) |
| **Binary Search** | Sorted data, "minimize the maximum" | [Cheat sheet](patterns/binary-search.md) |
| **BFS / DFS** | Trees, graphs, grids | [Cheat sheet](patterns/graphs.md) |
| **Dynamic Programming** | Overlapping subproblems, optimal substructure | [Cheat sheet](patterns/dp.md) |
| **Backtracking** | Combinations, permutations, constraints | [Cheat sheet](patterns/backtracking.md) |
| **Heap / Priority Queue** | Top-K, scheduling, streaming data | [Cheat sheet](patterns/heap.md) |

---

## 📝 Example: How Each Problem Is Explained

### 1. Two Sum — 🟢 Easy

**Problem:** Given an array `nums` and an integer `target`, return the indices of the two numbers that add up to `target`.

**💡 Intuition**
For each number `x`, we need to know if `target - x` was already seen. Instead of scanning the array again (O(n²)), we store seen numbers in a hash map for O(1) lookups.

**🛠️ Approach**
1. Create an empty map `seen` → `{value: index}`.
2. For each `(i, x)` in `nums`:
   - Compute `need = target - x`.
   - If `need` is in `seen`, return `[seen[need], i]`.
   - Otherwise, store `seen[x] = i`.

**💻 Code**
```python
def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return [seen[need], i]
        seen[x] = i
    return []
```

**⏱️ Complexity**

| | Brute Force | Hash Map ✅ |
|---|:---:|:---:|
| Time | O(n²) | **O(n)** |
| Space | O(1) | **O(n)** |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/leetcode-solutions.git
cd leetcode-solutions

# Run a specific solution's tests
python -m pytest problems/0001-two-sum/
```

### Adding a new problem

1. Copy `templates/problem-template.md` into `problems/<number>-<slug>/README.md`
2. Write your solution in `solution.py` (or your language of choice)
3. Add tests
4. Add a row to the [Problem Index](#-problem-index)
5. Update the [Progress](#-progress) table

---

## 🧱 Problem Template

Use this for every new problem so the repo stays consistent:

```markdown
# <Number>. <Title>  — 🟢/🟡/🔴

🔗 [LeetCode link](https://leetcode.com/problems/<slug>/)
🏷️ **Topics:** Array, Hash Map

## Problem
<short description in your own words>

## 💡 Intuition
<the "aha" moment>

## 🛠️ Approach
1. ...
2. ...

## 💻 Solution
<code>

## ⏱️ Complexity
- Time: O(...)
- Space: O(...)

## 🔁 Other Approaches
<brute force, alternatives, trade-offs>

## 📌 Takeaways
<what to remember next time>
```

---

## 🤝 Contributing

Found a bug or a cleaner approach? Contributions are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/problem-0042`
3. Commit your changes: `git commit -m "Add: 0042 Trapping Rain Water"`
4. Push and open a Pull Request

---

## 📚 Resources

- [LeetCode](https://leetcode.com/)
- [NeetCode Roadmap](https://neetcode.io/roadmap)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- *Cracking the Coding Interview* — Gayle Laakmann McDowell
- *Introduction to Algorithms* — CLRS

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

⭐ **If this repo helped you, give it a star!** ⭐

*Happy coding!* 🚀

</div>