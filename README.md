# 🌡️ Temperature Converter

A simple and responsive **Temperature Converter** built with **React.js**.
The application allows users to enter a temperature, select the source and target units, and instantly convert the value between **Celsius, Fahrenheit, and Kelvin**.

## ✨ Features

* 🔄 Convert temperatures between:

  * Celsius (°C)
  * Fahrenheit (°F)
  * Kelvin (K)
* ⚡ Instant temperature conversion
* 🔁 Swap "From" and "To" temperature units
* ❌ Handles invalid/non-numeric input
* 🧩 Built using reusable React components
* 📱 Responsive and user-friendly interface

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **Tailwind CSS**
* **Vite**
* **HTML5**
* **Git & GitHub**

## 📂 Project Structure

```text
Temperature-Converter/
│
├── src/
│   ├── components/
│   │   ├── TempInput.jsx
│   │   ├── TempFrom.jsx
│   │   ├── TempTo.jsx
│   │   ├── ShiftBtn.jsx
│   │   └── TempOutput.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Maryam-Hussain00/Temperature-Converter.git
```

### 2. Navigate to the project

```bash
cd Temperature-Converter
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local development URL provided by Vite in your browser.

## 🔢 Conversion Formulas

### Celsius → Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Fahrenheit → Celsius

```text
°C = (°F − 32) × 5/9
```

### Celsius → Kelvin

```text
K = °C + 273.15
```

### Kelvin → Celsius

```text
°C = K − 273.15
```

### Fahrenheit → Kelvin

```text
K = (°F − 32) × 5/9 + 273.15
```

### Kelvin → Fahrenheit

```text
°F = (K − 273.15) × 9/5 + 32
```

## 🎯 Purpose

This project was created as a **React.js practice project** to strengthen my understanding of:

* React components
* `useState`
* State management
* Event handling
* Conditional rendering
* Form/input handling
* JavaScript functions
* Temperature conversion logic
* Component-based UI development

## 👩‍💻 Author

**Maryam Hussain**

GitHub: [Maryam-Hussain00](https://github.com/Maryam-Hussain00)

---

⭐ If you find this project useful, feel free to give it a star!
