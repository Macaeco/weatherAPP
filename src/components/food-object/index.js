import { useState } from "react";



export let useFood = () => {
    const [food, updateFood]=useState([
        {
            name: "Thai Curry Chicken Meatballs",
            ingredients: "curry, chicken, olive-oil, tomatoe, speaces, salt",
            description: "Thai Curry Chicken Meatballs With Ground Chicken, Minced Garlic, Fresh Ginger, Green Onions, Salt, Fresh Cracked Black Pepper, Oil, Garlic, Bay Leaf, Curry Powder, Cayenne Pepper, Coconut Milk, Chicken Broth, Fish Sauce, Limes, Fresh Lime Juice, Cilantro",
            img: "https://lh3.googleusercontent.com/qCO4Y5lUo5HiitgeBEiPl_tpuZ6m80TWc6AamTJ6iwE0z756numHmP7lJuqnHE_jBrb63105BNr2g3wW0rdy",
            suggestedWeather: "rain",

        },
        {
            name: "Pasta Puttanesca",
            ingredients: "spaghetti,cherry tomatoes,spinach,diced red onion,black olives,lemon,,olive oil,salt,red pepper flakes,sugar",
            description: "Pasta Puttanesca With Spaghetti, Cherry Tomatoes, Spinach, Diced Red Onion, Capers, Black Olives, Lemon, Olive Oil, Garlic, Salt, Red Pepper Flakes",
            img: "https://lh3.googleusercontent.com/l86WSZmvGvi4VxH3RLp_gSscw3440zsyXaarvlYHYVVUfi6sGo1cPFb1O0eB8PY5quAM5ccgg8rS6lAtwdDfMa4",
            suggestedWeather: "clear"
        },
        {
            name: "Orecchiette with Broccoli Rabe and Sweet Italian Sausage",
            ingredients: "water,salt, garlic, broccoli",
            description: "Peppery broccoli rabe and spicy red pepper flakes kick up the flavor of this classic dish from Puglia. Learn to sweat garlic, emulsify your sauce, and why your choice of cheese matters.",
            img: "https://lh3.googleusercontent.com/AHySTwcv16pH8MU1o3AXcQ1JhuRevvCetLQyliqX6KJi6VauHqVDkgR5U0xQ9bQlJQxoeY5-Grme4-drl44JsQ",
            suggestedWeather: "clear",

        },
        {

            name: "Roasted Broccoli Recipes",
            ingredients: "broccoli",
            img: "https://lh3.googleusercontent.com/815aru_GcGE9loiegEoct815oeozU_YnR4GosZFNfy0QARrSpYZ6pvozZf3WN_Ea_67XbUWoguuYLKtZVuN0ALE",
            description: "The Best Roasted Broccoli Recipes on Yummly | Roasted Broccoli, Oven Roasted Broccoli, Garlic Parmesan Roasted Broccoli",
            suggestedWeather: "clear",

        },
         {
            name: "Garlic Parmesan Roasted Broccoli",
            ingredients: "Broccoli, Olive Oil, Salt, Black Pepper, Garlic Cloves, Grated Parmesan Cheese, Breadcrumbs",
            description: "To Simply Inspire is an encouraging website featuring simple recipes, easy DIY projects & crafts, and frugal living ideas for real life.arlic Parmesan Roasted Broccoli With Broccoli, Olive Oil, Salt, Black Pepper, Garlic Cloves, Grated Parmesan Cheese, Breadcrumbs",
            img: "https://lh3.googleusercontent.com/U6daOsa7akCg9FLeg3jWrdqSD_Ti55jb9QNFbEbCJ7PTgkNcpnoifnEfP7hf6pky0aEsTOqR_Ou4Nbx42KRk=s360",
            suggestedWeather: "cloud"
        }, {
            name: "The Marlboro Man Sandwich",
            ingredients: "Onions, Butter, Cube Steak, Seasoned Salt, Worcestershire Sauce, Tabasco Sauce, Deli Rolls",
            description: "The Marlboro Man Sandwich With Onions, Butter, Cube Steak, Seasoned Salt, Worcestershire Sauce, Tabasco Sauce, Deli Rolls",
            img: "https://lh3.googleusercontent.com/NugprN1rAue6u72OG0djk0u_O1GPNtG03CsXeGFWq8deBdJ5Kj8g47eLrVI25lNUlmzTZIy4OQ20Wn__ThXk3_k",
            suggestedWeather: "rain"
        }, {
            name: "Spinach and Bacon Quiche",
            ingredients: "Large Eggs, Heavy Cream, Seasoning Salt, Fresh Baby Spinach, Bacon, Frozen Deep Dish Pie Crust",
            description: "Spinach And Bacon Quiche With Large Eggs, Heavy Cream, Seasoning Salt, Fresh Baby Spinach, Bacon, Frozen Deep Dish Pie Crust",
            img: "https://lh3.googleusercontent.com/IQfNoZ1ZbpxdXsT0EnBTQVsiNvsjFA0H0okH1Y_6VdbU3PdqOAqPGOSk8gsgNwGLZx8XEW2QE26M41hg3V3Ysg",
            suggestedWeather: "clear"
        }, {
            name: "Fried Chicken",
            ingredients: "chicke, olive-oil, salt, breaded",
            description: "A curious brine of hot peppers and pickle juice paves the way to juicy fried chicken with crispy browned skin. Use Carla's tips to carve, dredge and fry your way to a truly celebratory meal",
            img: "https://lh3.googleusercontent.com/Qr6TYafFMqQX_nOmyLIFc4jizUKVjICOJirf7ixA49zfwKuE0pkLWPVGNUJ0BnvLYmubOJYhDOx2i7fUrqXfWg",
            suggestedWeather: "rain"
        }, {
            name: "Eggplant Pizza",
            ingredients: "Eggplant, Tomato Sauce, Provolone Cheese, Cherry Tomatoes, Fresh Spinach, Himalayan Salt, Pepper Flakes",
            description: "Eggplant Pizza With Eggplant, Tomato Sauce, Provolone Cheese, Cherry Tomatoes, Fresh Spinach, Himalayan Salt, Pepper Flakes",
            img: "https://lh3.googleusercontent.com/BB9Vats2nf0dXhIFbDuxrI88dQPSU5UUDXXyMBOVY7MoYGVqqouYfOCcZmkpmV8I4bK9dGqEsDchCqMxU74dWg",
            suggestedWeather: "clear"
        }, {
            name: "Thai Cucumber Salad with Peanuts",
            ingredients: "cucumber, garlic, peanuts, salt, olive-oil, tomatoe",
            description: "Thai Cucumber Salad With Peanuts With Red Onion, English Cucumbers, Chopped Fresh Cilantro, Salted Peanuts, Jalapeño Pepper, Salt, Fresh Lime Juice, Vegetable Oil, Fish Sauce, Sugar, Garlic Clove",
            img: "https://lh3.googleusercontent.com/31hzHeNbMDgTHvVnpDBeTLRgCwoESUbkFffK6wC7xCjY0z0EMhvtgwe6X4BSbrqrL6uVQRK1GvB8QpXkUwXAiA",
            suggestedWeather: "clear"
        }, {
            name: "Green Bean Casserole",
            ingredients: "bean, besamel, cheese, salt, olive-oil, vegetables to taste",
            description: "Green Bean Casserole With Campbell's Condensed Cream Of Mushroom Soup, Milk, Soy Sauce, Ground Black Pepper, Cooked Cut Green Beans, French's® French Fried Onions",
            img: "https://lh3.googleusercontent.com/4b_oEobcBMZgAalFYUHbrT7dAn8vZO8xKD7rheb4EEGgd-yuCSIn3BZO6uuF2nyQV1RZke0KJ6ohooS3axhz",
            suggestedWeather: "clouds"
        }, {
            name: "Thai Curry Chicken Meatballs",
            ingredients: "Ground Chicken, Minced Garlic, Fresh Ginger, Green Onions, Salt, Fresh Cracked Black Pepper, Oil, Garlic, Bay Leaf, Curry Powder, Cayenne Pepper, Coconut Milk, Chicken Broth, Fish Sauce, Limes, Fresh Lime Juice, Cilantro",
            description: "Thai Curry Chicken Meatballs With Ground Chicken, Minced Garlic, Fresh Ginger, Green Onions, Salt, Fresh Cracked Black Pepper, Oil, Garlic, Bay Leaf, Curry Powder, Cayenne Pepper, Coconut Milk, Chicken Broth, Fish Sauce, Limes, Fresh Lime Juice, Cilantro",
            img: "https://lh3.googleusercontent.com/qCO4Y5lUo5HiitgeBEiPl_tpuZ6m80TWc6AamTJ6iwE0z756numHmP7lJuqnHE_jBrb63105BNr2g3wW0rdy",
            suggestedWeather: "clouds"
        }, {
            name: "Creamy Garlic Mashed Potatoes",
            ingredients: "Yukon Gold Potatoes, Garlic, Unsalted Butter, Heavy Whipping Cream, Sour Cream, Pepper, Salt, Salt",
            description: "Creamy Garlic Mashed Potatoes With Yukon Gold Potatoes, Garlic, Unsalted Butter, Heavy Whipping Cream, Sour Cream, Pepper, Salt, Salt",
            img: "https://lh3.googleusercontent.com/po-lxSbPOspCI_Y1zIh-pKaPAFbQA5GlxSfdiIViYzHe7sHcOnwUXCkoPK8LWDWzecOXroJgQ7j_MAtv-VXjFRU",
            suggestedWeather: "rain"
        }, {
            name: "Orange Chestnut Salad",
            ingredients: "Orange, chesnut,spinach,sprockets",
            description: "This 6-ingredient salad is a light and bright addition to your winter table. In this recipe, you'll learn how to supreme an orange and make a miso-sherry dressing from scratch.",
            img: "https://lh3.googleusercontent.com/p82p6mZjHu2Ch2XTBqw5s23-_60Fw84uzh0Fon-C1a5TvPxu7sPqfxsKBgHeYc9mx4kEJ7aEbbgOdQRBZKAMLz6UlRXmuzkjWg",
            suggestedWeather: "clear"
        }
        , {
            name: "Fast and Easy Greek Grilled Eggplant",
            ingredients: "Salt, Eggplants, Greek Seasoning, Olive Oil, Feta Cheese, Fresh Parsley Chopped",
            description: "Fast And Easy Greek Grilled Eggplant With Kosher Salt, Eggplants, Greek Seasoning, Olive Oil, Feta Cheese, Fresh Parsley Chopped",
            img: "https://lh3.googleusercontent.com/XhrCzZME5qwRq8H4Tezpl7smmR1SSy7JLeakYhYzceA5VYwRhCtsSAaAigbYs4qnZO9cL-PxJm6QRat7bTo-Nxg",
            suggestedWeather: "clouds"
        }, {
            name: "Navy Bean and Ham Soup",
            ingredients: "Water, Reduced Sodium Vegetable Broth, Yellow Onion, Carrot, Chopped Celery, Garlic Clove, Bay Leaf, Black Pepper, Ham Bone",
            description: "Navy Bean And Ham Soup With Dried Navy Beans, Water, Reduced Sodium Vegetable Broth, Yellow Onion, Carrot, Chopped Celery, Garlic Clove, Bay Leaf, Black Pepper, Ham Bone",
            img: "https://lh3.googleusercontent.com/AqO6xMCUX3T22r6eDjRf-0ozOeyjniJKaU6tlJrEFX1zS7vsJmCPOnVbVPYuwIWc0Mm0x9zEGhjFhDPbiXKpcA",
            suggestedWeather: "rain"
        }, {
            name: "Almost-Homemade Cranberry Pear Sauce",
            ingredients: "cracberry,sugar,water",
            description: "Solving the daily dinner dilemmaAdd freshness and a little zing to canned cranberry sauce. This 5-minute, 3-ingredient sauce is so delicious that no one will guess it starts with a convenient shortcut. Even though it's quick, you can make it ahead up to 4 days. The recipe is a Yummly original created by [Ashley Strickland Freeman",
            img: "https://lh3.googleusercontent.com/kutKEN3m4NI2feFD3ue5bSuhOJaAJF9KZ6xGjdiEJr7S_cTL6COg1U3nXJUANw--kpvpoxHkd8bVQGnfvTNVj7XnOhc8mz2WIeU",
            suggestedWeather: "cloud"
        }

    ])
    


    

    return {food,updateFood}
}



