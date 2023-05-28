
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
        alert("SWITCH ");
    }
})
