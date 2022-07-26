// Одновременно работает 4 потока

import crypto from 'crypto';

const start = Date.now();

crypto.pbkdf2("12345", "salt", 1000000, 64, "sha512", () => {
    console.log("1. Time: ", Date.now() - start)})

crypto.pbkdf2("12345", "salt", 1000000, 64, "sha512", () => {
    console.log("2. Time: ", Date.now() - start)})

crypto.pbkdf2("12345", "salt", 1000000, 64, "sha512", () => {
    console.log("3. Time: ", Date.now() - start)})

crypto.pbkdf2("12345", "salt", 1000000, 64, "sha512", () => {
    console.log("4. Time: ", Date.now() - start)})

crypto.pbkdf2("12345", "salt", 1000000, 64, "sha512", () => {
    console.log("5. Time: ", Date.now() - start)})

crypto.pbkdf2("12345", "salt", 1000000, 64, "sha512", () => {
    console.log("6. Time: ", Date.now() - start)})

crypto.pbkdf2("12345", "salt", 1000000, 64, "sha512", () => {
    console.log("7. Time: ", Date.now() - start)})

crypto.pbkdf2("12345", "salt", 1000000, 64, "sha512", () => {
    console.log("8. Time: ", Date.now() - start)})