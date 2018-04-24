/*1. Create an array that holds at least five items. Each item should be a string that describes your experience at NSS so far.

2. Iterate over the array and console log each item in the array.
*/

const menu = [
    {
        name: "Frappe McFrapperson",
        price: 6.99,
        category: "beverage",
        size: ["8 oz", "16 oz", "52 oz"]
    },
    {
        name: "Scone",
        price: 6.66,
        category: "pastry",
        size: ["mini", "regular", "large"]
    },
    {
        name: "T-shirt",
        price: 1000.00,
        category: "merchandise",
        size: [
            {
                description: "S",
                material: "Rayon"
            },
            {
                description: "M",
                material: "Cotton"
            },
            {
                description: "L",
                material: "Asbestos"
            }
        ]
    }
]

const printMenu = () => {
    menu.forEach((currentMenuItem, index) => {
        console.log(`${index+1}. ${currentMenuItem.name} ($${currentMenuItem.price})`)
        currentMenuItem.size.forEach(currentSize => {
            console.log(currentSize.description)
        })
    })
}

//1. Create an object to represent a driver. The object should have properties to represent the following:
// driver's license number, a collection of vehicles they own, and a collection of dates for when they have gotten a ticket.

const Driver = Object.create(null, {
    licenseNumber: {
        value: "2934239048",
        enumerable: true
    },
    ownedVehicles: {
        enumerable: true,
        value: ["Mars Lander", "Range Rover", "1967 Chevy Nova", "Dodge Dart"]
    },
    ticketsReceived: {
        enumerable: true,
        value: ["04/13/1988", "08/01/1990"]
    },
    drive: {
        value: function (action) {
            console.log(`Yes ma'am, I will ${action}`)
        }
    }
})


Driver.drive("Accelerate")
Driver.drive("Turn left")
Driver.drive("Turn right")
Driver.drive("Turn left")
Driver.drive("Decelerate")




//2. Iterate over your object and console log the keys and their values.

for (const key in Driver) {
    console.log(`${key}: ${Driver[key]}`)
}








//1. Write a function that takes two arguments. This function should return the concatenated value of the two arguments.

const fullname = (first, last) => `${first} ${last}`

/*2. Call the function with your first name and last name as the two arguments.*/

const join = fullname("Jeremiah", "Pritchard")

//3. Console log the return value.

console.log(join)

