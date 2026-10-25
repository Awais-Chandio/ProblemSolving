//getProduct() naam ka async function banao jo ek Promise se product object receive kare aur uska name print kare.
async function getProduct() {
    const employee = await new Promise((resolve, reject) => {
        if (true) {
            resolve({ name: "Awais", salary: "20000" })
        } else {
            reject("Error fetching employee")
        }
    })
    return employee
}

getProduct().then((data) => {
    console.log(data.name)
}).catch((error) => {
    console.log(error)
})



//Voting(age) naam ka function banao jo ek Promise se voting ki eligibility check kare aur result print kare.
function Voting(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("You are eligible for voting")
        } else {
            reject("You are not eligible for voting")
        }
    })
}

Voting(19).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})


async function PaymentCheck(amount) {
    const status = await new Promise((resolve, reject) => {
        if (amount >= 1000) {
            resolve("Payment Done")
        }
        else {
            reject("Insufficient Balance")
        }
    })

    return status
}

PaymentCheck(5000).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

