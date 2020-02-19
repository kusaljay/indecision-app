export const isAdult = (age) => age >= 18;
export const canDrink = (age) => age >= 21;
export default (age) => age >= 65; // Correct

// export { isAdult, canDrink, isSenior as default }; // Correct

//export default isSenior; // Correct