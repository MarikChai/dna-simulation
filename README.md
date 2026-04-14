# 🧬 DNA Simulation — pAequor

A JavaScript simulation of DNA behavior for fictional organisms (pAequor).  
The project focuses on practicing core programming concepts such as arrays, objects, loops, and algorithmic thinking.

---

## 🚀 Features

- Generate random DNA strands (15 bases: A, T, C, G)
- Mutate DNA (ensuring actual change)
- Compare DNA between specimens
- Determine survival likelihood (≥ 60% C/G)
- Generate a population of 30 viable organisms

---

## 🧠 Logic Overview

Each specimen:
- has a unique ID (`specimenNum`)
- contains a DNA sequence (`dna` array)

### Survival Rule
An organism is likely to survive if:
- at least **60%** of its DNA consists of **C** or **G**

---

## 🖥 Example Output

--- DNA Simulation Report ---

Total survivors: 30

Specimen #1  
DNA: A T G C G C G A T C G G A T C  
Survives: true  

DNA Comparison:  
specimen #1 and specimen #2 have 66.67% DNA in common

---

## ⚙️ How to Run

node main.js

---

## 🛠 Tech Stack

- JavaScript (ES6)
- Node.js

---

## 📌 Project Purpose

This project was built as part of my learning process while transitioning into software development.  
It demonstrates understanding of:
- factory functions
- array manipulation
- loops and conditionals
- basic simulation logic

---

## 📁 Structure

main.js   # main logic and simulation

