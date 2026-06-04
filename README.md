# 🚀 JavaScript Core Concepts & Array Methods

জাভাস্ক্রিপ্টের মৌলিক কিছু ধারণা যেমন—Scope, Variable Types এবং বহুল ব্যবহৃত গুরুত্বপূর্ণ Array Methods ও Loops গুলোর প্র্যাক্টিক্যাল ব্যবহার কোড এক্সাম্পলসহ এই ফাইলে ডকুমেন্ট করা হয়েছে।

---

## 📌 সূচিপত্র (Table of Contents)
1. [Scope Concept](#1-scope-concept)
2. [var, let, const Concept](#2-var-let-const-concept)
3. [find()](#3-find)
4. [filter()](#4-filter)
5. [slice()](#5-slice)
6. [splice()](#6-splice)
7. [concat()](#7-concat)
8. [push()](#8-push)
9. [map()](#9-map)
10. [reduce()](#10-reduce)
11. [forEach()](#11-foreach)
12. [for...of Loop](#12-forof-loop)
13. [for...in Loop](#13-forin-loop)

---

### 1. Scope Concept
জাভাস্ক্রিপ্টে ভেরিয়েবল কোথায় অ্যাক্সেস করা যাবে তা স্কোপ নির্ধারণ করে। ফাংশনের ভেতর নতুন করে `var` ডিক্লেয়ার করলে তা লোকাল স্কোপ পায়, আর ডিক্লেয়ার না করে সরাসরি লিখলে তা গ্লোবাল ভেরিয়েবলকে পরিবর্তন করে।

```javascript
var lang = "JavaScript";

function learn(topic) {
    // lang = topic;   // এটি গ্লোবাল 'lang' ভেরিয়েবলকে পরিবর্তন করে ফেলবে।
    var lang = topic;  // এটি একটি সম্পূর্ণ নতুন লোকাল ভেরিয়েবল তৈরি করবে।

    if (true) {
        const a = { b: 5 };
        a.b = 9;       // const অবজেক্টের ভেতরের প্রোপার্টি পরিবর্তন করা সম্ভব।
        console.log(a); // { b: 9 }
    }
    console.log(`I am learning ${topic}`);
}

learn("Python");
console.log(`I know ${lang}`); // আউটপুট: I know JavaScript (যদি লোকাল var ব্যবহার করা হয়)
2. var, let, const Concept
let এবং const হলো ব্লক-স্কোপড।

প্রিমিটিভ ডাটা টাইপের ক্ষেত্রে একটি ভেরিয়েবলের মান অন্যটিতে কপি করার পর, মূল ভেরিয়েবলের মান পরিবর্তন করলেও কপি করা ভেরিয়েবলের মান অপরিবর্তিত থাকে।

JavaScript
let a = 5;
let b = 6;

a = b; // a এর মান এখন 6
b = 9; // b পরিবর্তন হলেও 'a' এর মান 6-ই থাকবে

console.log(a); // 6
console.log(b); // 9
3. find()
Array-র উপাদানগুলোর মধ্যে আপনার দেওয়া শর্ত পূরণকারী একদম প্রথম উপাদানটি খুঁজে বের করে। শর্ত মিললে উপাদানটিই রিটার্ন করে, কোনো Array দেয় না।

JavaScript
const fruits = ["Banana", "Apple", "lemon"];

const result = fruits.find((f) => f === "Apple" || f === "Banana");
console.log(result); // আউটপুট: Banana (যেহেতু এটি প্রথমে আছে)
4. filter()
Array-র উপাদানগুলোর মধ্যে যে যে উপাদান শর্ত পূরণ করবে, তাদের সবাইকে নিয়ে নতুন একটি Array তৈরি করে।

JavaScript
const fruits = ["Banana", "Apple", "lemon"];

const result = fruits.filter((f) => f === "Apple" || f === "Banana");
console.log(result); // আউটপুট: ["Banana", "Apple"]
5. slice()
নির্দিষ্ট ইণ্ডেক্স থেকে শুরু করে অন্য একটি ইণ্ডেক্সের (উক্ত ইণ্ডেক্স বাদে) মধ্যবর্তী অংশ কেটে নিয়ে নতুন একটি Array দেয়। এটি মূল Array পরিবর্তন করে না।

JavaScript
const fruits = ["Banana", "Apple", "lemon", "Mango", "Pine Apple", "Orange"];

const result = fruits.slice(2, 5); // ২ নম্বর ইনডেক্স থেকে শুরু করে ৫ নম্বরের আগের পর্যন্ত

console.log(result); // আউটপুট: ["lemon", "Mango", "Pine Apple"]
console.log(fruits); // মূল Array অপরিবর্তিত থাকবে
6. splice()
এটি দিয়ে Array থেকে নির্দিষ্ট উপাদান মুছে ফেলা বা নতুন উপাদান যোগ করা যায়। মনে রাখবেন, এটি সরাসরি মূল Array-টিকে পরিবর্তন (Mutate) করে ফেলে।

JavaScript
const fruits = ["Banana", "Apple", "lemon", "Mango", "Pine Apple", "Orange"];

const result = fruits.splice(1, 2); // ১ নম্বর ইনডেক্স থেকে শুরু করে ২টি উপাদান রিমুভ করবে

console.log(result); // আউটপুট: ["Apple", "lemon"] (যা রিমুভ হয়েছে)
console.log(fruits); // আউটপুট: ["Banana", "Mango", "Pine Apple", "Orange"] (মূল Array বদলে গেছে)
7. concat()
একাধিক Array বা উপাদানকে একত্রে জোড়া লাগিয়ে নতুন একটি Array তৈরি করে। এটি মূল Array-তে কোনো পরিবর্তন আনে না।

JavaScript
const fruits = ["Banana", "Apple", "lemon", "Mango", "Pine Apple", "Orange"];

const result = fruits.concat("Malta", "Naspati");

console.log(result); // আউটপুট: নতুন ফলসহ সব উপাদান একসাথে দেখাবে
console.log(fruits); // মূল Array আগের মতোই থাকবে
8. push()
Array-র একদম শেষের দিকে এক বা একাধিক নতুন উপাদান যোগ করার জন্য ব্যবহার করা হয়। এটি মূল Array পরিবর্তন করে এবং নতুন দৈর্ঘ্য (length) রিটার্ন করে।

JavaScript
const fruits = ["Banana", "Apple", "lemon", "Mango", "Pine Apple", "Orange"];

const result = fruits.push("Malta", "Naspati");

console.log(result); // আউটপুট: 8 (Array-র নতুন দৈর্ঘ্য)
console.log(fruits); // মূল Array-র শেষে নতুন উপাদানগুলো যোগ হয়ে যাবে
9. map()
Array-র প্রতিটি উপাদানের ওপর লুপ চালিয়ে হিসাব-নিকাশ করে সমান দৈর্ঘ্যের সম্পূর্ণ নতুন একটি Array রিটার্ন করে।

JavaScript
const fruits = ["Banana", "Apple", "lemon", "Mango", "Pine Apple", "Orange", "Apple", "Apple"];

const result = fruits.map((f) => {
    if (f === "Apple") {
        return "A";
    } else {
        return "N/A";
    }
});

console.log(result); // আউটপুট: ["N/A", "A", "N/A", "N/A", "N/A", "N/A", "A", "A"]
console.log(fruits); // মূল Array ঠিক থাকবে
10. reduce()
পুরো Array-র সব উপাদানকে একটি কলব্যাক ফাংশনের মাধ্যমে প্রসেস বা হিসাব করে দিনশেষে একটি একক ফলাফলে (Single Value) নামিয়ে আনে।

JavaScript
const number = [1, 2, 3, 4, 5];

const result = number.reduce((summation, currentValue) => summation + currentValue, 0);

console.log(result); // আউটপুট: 15
11. forEach()
এটি Array-র প্রতিটি উপাদানের জন্য একবার করে লুপ চালায়। এটি নিজে কোনো কিছু রিটার্ন করে না (undefined)। মূলত প্রতিটা উপাদান আলাদা করে দেখার বা কোনো অ্যাকশন নেওয়ার জন্য এটি ব্যবহৃত হয়।

JavaScript
const fruits = ["Banana", "Apple", "lemon", "Mango", "Pine Apple", "Orange"];

fruits.forEach((fruit) => {
    console.log("I want to eat " + fruit);
});
12. for...of Loop
যেকোনো ইটারেবল অবজেক্ট (যেমন: Array, String) এর ভেতরের উপাদানগুলোর (Values) ওপর সরাসরি লুপ চালানোর আধুনিক নিয়ম। এর ভেতরে break বা continue ব্যবহার করা যায়।

JavaScript
const fruits = ["Banana", "Apple", "lemon", "Mango", "Pine Apple", "Orange"];

for (const fruit of fruits) {
    if (fruit === "Mango") {
        console.log("After Get Mango, Loop will be stopped");
        break; // ম্যাঙ্গো পাওয়ার সাথে সাথে লুপ বন্ধ হয়ে যাবে
    }
    console.log(fruit);
}
13. for...in Loop
প্রধানত কোনো Object-এর প্রোপার্টি বা চাবি (Keys) গুলোর ওপর লুপ চালানোর জন্য এটি ব্যবহার করা হয়।

JavaScript
const company = {
    name: "AdventureAi",
    founder: "Shahid",
    year: 2023
};

// ১. শুধু প্রোপার্টি বা চাবির নাম (Keys) দেখার জন্য:
for (const key in company) {
    console.log(key); // আউটপুট: name, founder, year
}

// ২. প্রোপার্টির ভেতরের মান (Values) দেখার জন্য:
for (const key in company) {
    console.log(company[key]); // আউটপুট: AdventureAi, Shahid, 2023
}
💡 নোট: কোডগুলো আরও নিরাপদ ও বাগ-মুক্ত রাখতে লুপের ভেতরে ভেরিয়েবল ডিক্লেয়ার করার সময় সবসময় const বা let ব্যবহার করা উচিত (যেমন: for (const fruit of fruits))।
