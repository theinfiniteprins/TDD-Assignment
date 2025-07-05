# TDD Calculator Assignment

A simple string calculator implementation following Test-Driven Development (TDD) principles. This project demonstrates the TDD approach by writing tests first and then implementing the functionality to make them pass.

## 🚀 Tech Stack

- **JavaScript** - Core programming language
- **Jest** - Testing framework
- **Node.js** - Runtime environment

## 📁 Project Structure

```
TDD-Assignment/
├── src/
│   └── calculator.js          # Main calculator implementation
├── tests/
│   └── calculator.test.js     # Test cases
├── package.json               # Project dependencies and scripts
├── package-lock.json         # Dependency lock file
└── README.md                 # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/theinfiniteprins/TDD-Assignment.git
   cd TDD-Assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Project

### Start the Application
```bash
node src/calculator.js
```

### Run Tests
```bash
npm run test
```

## 📋 Test Cases Implemented

The calculator includes the following test cases, implemented following TDD methodology:

| **Step** | **Feature Description** |
|----------|-------------------------|
| 1.1 | Should return 0 for empty string |
| 1.2 | Handle single number input |
| 1.3 | Handle two comma separated number input |
| 2 | Handle any number of comma separated numbers in input |
| 3 | Handle new lines between numbers |
| 4 | Handle custom delimiters |
| 5.1 | Handle a negative number |
| 5.2 | Handle negative numbers |
| 6 | Numbers greater than 1000 should be ignored |
| 7 | Handle delimiters with any length |


## 🏗️ TDD Approach

This project follows the **Red-Green-Refactor** cycle:

1. **🔴 Red:** Write a failing test
2. **🟢 Green:** Write minimal code to make the test pass
3. **🔵 Refactor:** Improve the code while keeping tests green

Each feature was implemented incrementally:
- Started with the simplest case (empty string)
- Gradually added complexity (single numbers, multiple numbers)
- Added advanced features (custom delimiters, validation, filtering)

## 📝 License

This project is part of a TDD learning assignment.

---

**Repository:** [https://github.com/theinfiniteprins/TDD-Assignment](https://github.com/theinfiniteprins/TDD-Assignment)

*Crafted with ❤️ following Test-Driven Development principles*
