const userPersonalData = {
    name: 'peter',
    age: '56',
    birthday: 'jan 1st',
}

const userGameData = {
    score: 4546,
    accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const newData1 = {
    ...userPersonalData,
    ...userGameData
}
// console.log('newData ', newData1)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Make a copy of your new user object but overrode the birthday to december 31st
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const newData2 = {
    ...userPersonalData,
    ...userGameData,
    birthday: 'december 31st'

}
// console.log('newData ', newData2)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Use the spread operator to make a copy of the accomplishments array and store it i na new variable
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const newArr = [
    ...userGameData.accomplishments
]
console.log('newArr ', newArr)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
//  4.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var user = {
    name1: 'pete',
    age: '32',
    favoriteThings: {
        food1: ['pizza', 'tacos', 'burgers', 'italian'],
        movies: [],
    },
}
const { name1, age, favoriteThings: { food1 } } = user
const favoriteFoods = food1
// console.log(favoriteFoods)

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Once you have grabbed the favorite foods. Descontrusct the food array to grab only the first 2 values. //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const [one, two] = favoriteFoods
console.log(`${one}, ${two}`)

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos']

const [name3, age1, ...food3] = data
console.log(`${name3}, ${age1}, ${food3}`)

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. use object destructuring to grab the following from the userData object: 
// - The user's name and in a constant named userName.
// - The user's facorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const userData = {
    name2: 'Peter',
    favorites: {
        needs: {
            food2: ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
        },
        wants: {
            things: ['cars', 'jewelry'],
        },
    },
}
const { name2, favorites: { needs: { food2 }, wants: { things } } } = userData

const userName = name2
const favoriteFood = food2
const [three, four] = things
const favoriteThing = three
const secondfavoriteThing = four
console.log(`name: ${userName}. favorite foods: ${favoriteFood}. favorite thing: ${favoriteThing}. second favorite thing: ${secondfavoriteThing}`)
