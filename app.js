const taxiemployee = document.querySelector('.taxi-employee');
const taxipark = document.querySelector('.taxi-park');

// PUSH NUMBER OF TOTAL STAFF
const pushTotalStaff = (total) => {
    document.querySelector('.totalstaff').innerHTML = total
}
pushTotalStaff(25)

let jobData = {
    owner: "john smith",
    transport: '$1500',
    title : "working as a cab driver",
    requirements: [
        { 
            icon: 'images/government.svg',
            requirement: "government work"
        },
        { 
            icon: 'images/licence.svg',
            requirement: "driving licence"
        },
        { 
            icon: 'images/level.svg',
            requirement: "2nd game level"
        },
        { 
            icon: 'images/card.svg',
            requirement: "salary on card"
        },
    ],
    description: "Urban Ride is looking for experienced and professional taxi drivers who can deliver excellent service to our clients. You will have to drive our modern and comfortable vehicles, use our GPS and payment systems, and communicate effectively with our dispatchers and customers. You will also have to keep track of your mileage, fuel, and expenses."
}

const pushJobData = (job) => {
    const { owner, title, requirements, description, transport } = job
    document.querySelector('.ownername').innerHTML = owner;
    document.querySelector('.description').innerHTML = description;
    document.querySelector('.transportprice').innerHTML = transport;
    document.querySelector('.title').innerHTML = title;
    requirements.map((item) => {
        const {icon, requirement} = item;
        document.querySelector('.requirements-container').innerHTML += `
        <div class="flexsmall requirement semibold fontmedium">
            <img src=${icon} alt="icon" class="icon">
            ${requirement}
        </div>
        ` 
    } )
}
pushJobData(jobData);

// ESCAPE KEY BACK
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
    }
});

// ENTER KEY CLICKED
document.addEventListener('keydown', evt => {
    if(evt.key === 'Enter'){
        alert("ENTER GET EMPLOYED");
    }
})

// SPACE KEY CLICKED
document.addEventListener('keydown', evt => {
    if(evt.key === ' '){
        alert("SPACEBAR TRANSPORT RENTAL");
    }
})

// TAB SWITCHING
document.addEventListener('keydown', evt => {
    if(evt.key === 'Tab'){
        taxiemployee.classList.toggle('hidden');
        taxipark.classList.toggle('hidden')
    }
})

// SECOND SCREEN (TAXI-PARK) FUNCTIONS
let taxiorderdata = [
    {
        customer: "harley",
        distance: 1665,
        note: "i'm with my pet",
        status: "pending"
    },
    {
        customer: "dakota",
        distance: 567,
        note: "",
        status: "pending"
    },
    {
        customer: "logan",
        distance: 156,
        note: "i’m glad you are my taxi driver. Please be careful on the road and respect my wishes.",
        status: "accepted"
    },
    {
        customer: "taylor",
        distance: 687,
        note: "",
        status: "waiting"
    },
]

const taxiorders = document.querySelector('.taxiorders');
const pushTaxiOrders = (orders) => {
    taxiorders.innerHTML = ""
    orders.map((order) => {
        console.log(order)
        const { customer, distance, note, status } = order;
        taxiorders.innerHTML += `
        <section class="customertaxiorder">
            <div class="grid-4">
                <p class="capitalize semibold fontsmall">${customer}</p>
                <p class="capitalize semibold fontsmall">${distance}</p>
                <p class="capitalize opacity-80 fontsmall">${note}</p>
                <button class="acceptorder fontsmall">Accept the order</button>
            </div>
            <div class="dotsandline">
                <div class="dot"></div>
                <div class="line"></div>
                <div class="dot"></div>
            </div>
        </section>
        `
    })
}
pushTaxiOrders(taxiorderdata);

document.querySelector('.totalorders').innerHTML = taxiorderdata.length