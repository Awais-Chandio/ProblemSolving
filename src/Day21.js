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
