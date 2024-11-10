// Nav Section Start
let getStart = document.querySelector("#getStart");
let drawer = document.querySelector("#drawer");
let close = document.querySelector("#close");
getStart.addEventListener("click",()=>{
    drawer.style.width = "300px"
})
close.addEventListener("click",()=>{
    drawer.style.width = "0"
})
// Nav Section End

// Banner Section Start
let banner = document.querySelector("#banner")
let bannerMouse = document.querySelector("#bannerMouse")
let bannerIllus = document.querySelector(".bannerIllus")
let bannerImage = document.querySelector(".bannerImage")
console.log(bannerIllus);
document.addEventListener("mousemove",(event)=>{
    bannerMouse.style.left = `${event.pageX}px`;
    bannerMouse.style.top = `calc(${event.pageY}px - 170px)`;    
})
banner.addEventListener("mousemove",(event)=>{
    bannerIllus.style.top = `calc(50% - ${((event.clientY) / 200) + "px"})`;
    bannerIllus.style.left = `calc(50% - ${((event.clientX) / 200) + "px"})`;
    
    bannerImage.style.left = `calc(50% - ${((event.clientY) / 150) + "px"})`;
    bannerImage.style.bottom = `calc(-295px - ${((event.clientX) / 200) + "px"})`;
    
    bannerMouse.style.visibility = `visible`;
    bannerMouse.innerHTML = "Banner"
    bannerMouse.style.backgroundColor = "#071b27"
})
// Banner Section End

// About Section Start
let about = document.querySelector("#about");
let aboutMouse = document.querySelector("#aboutMouse");
about.addEventListener("mousemove",(event)=>{
    bannerMouse.innerHTML = "About";
    bannerMouse.style.backgroundColor = "yellowgreen"
})

let aboutData = [
    {
        heading: "Company Overview",
        para: "<strong>Borderless Chain LLC</strong> is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships.",
        image: "./images/aboutImage1.jpg"
    },
    {
        heading: "Mission Statement",
        para: "Our mission at Borderless Chain is to <strong>empower individuals and communities</strong> by providing a safe, inclusive, and technologically advanced platform. We strive to <strong>bridge cultural gaps</strong>, foster social harmony, and <strong>promote economic development</strong> through our innovative services",
        image: "./images/aboutImage2.jpg"
    },
    {
        heading: "Future Goals",
        para: " As we look towards the future, our goal is to <strong>expand our reach</strong> and <strong>deepen our impact</strong> on a global scale. We aim to become the <strong>leading platform</strong> for cross-cultural connections, offering a wide range of services that cater to the diverse needs of our users. Additionally, we are committed to <strong>supporting underrepresented communities</strong> and <strong>promoting social justice</strong> through our initiatives.",
        image: "./images/aboutImage3.jpg"
    }
]

let aboutTest = document.querySelector("#aboutCard")    
    aboutData.map((item, index)=>{
        index +=1
        if(index % 2 == 0){
            aboutTest.innerHTML += `<div class="aboutItemWrapper">
                        <div class="aboutItemImg">
                            <img src="${item.image}" alt="AboutImage" class="aboutImage">
                        </div>
                        <div class="aboutItemText">
                            <h3 class="title">${item.heading}</h3>
                            <p>${item.para}</p>
                        </div>
                   </div>`
        }else{
            aboutTest.innerHTML += `<div class="aboutItemWrapper">
                        <div class="aboutItemText">
                            <h3 class="title">${item.heading}</h3>
                            <p>${item.para}</p>
                        </div>
                        <div class="aboutItemImg">
                            <img src="${item.image}" alt="AboutImage" class="aboutImage">
                        </div>
                   </div>`
        }
})
// About section End 

// service section start 
let serviceCardData = [
    {
        image: "./images/serviceImages.jpg",
        serviceCardTitle: "SNS & Community Site",
        servicePara1: "<strong>Connect with People from Around the World:</strong> Our platform brings together individuals from diverse backgrounds, fostering meaningful connections and collaborations.",
        servicePara2: "<strong>Discover New Opportunities:</strong> Whether you're seeking business partnerships, job opportunities, or simply new friends, our matchmaking features can help you find what you're looking for.",
        servicePara3: "<strong>Build a Global Network:</strong> Expand your horizons and create lasting relationships with people from all corners of the globe."        
    },
    {
        image: "./images/serviceImages.jpg",
        serviceCardTitle: "SNS & Community Site",
        servicePara1: "<strong>Connect with People from Around the World:</strong> Our platform brings together individuals from diverse backgrounds, fostering meaningful connections and collaborations.",
        servicePara2: "<strong>Discover New Opportunities:</strong> Whether you're seeking business partnerships, job opportunities, or simply new friends, our matchmaking features can help you find what you're looking for.",
        servicePara3: "<strong>Build a Global Network:</strong> Expand your horizons and create lasting relationships with people from all corners of the globe."        
    }
]
let serviceCardWrapper = document.querySelector(".serviceCardWrapper")
serviceCardData.map((item)=>{    
    serviceCardWrapper.innerHTML += `
    <div class="serviceCard">
        <div class="serviceCardHead">
            <img src="${item.image}" class="serviceCadImg">
        </div>
        <div class="serviceCardBody">
            <h3 class="serviceCardTitle">${item.serviceCardTitle}
                <i class="fa-solid fa-arrow-right"></i>
            </h3>
            <ul>
                <li>
                    <i class="fa-regular fa-circle-check"></i>
                    <p>
                    ${item.servicePara1}
                    </p>
                </li>
                <li>
                    <li><i class="fa-regular fa-circle-check"></i>
                    <p>
                    ${item.servicePara2}
                    </p>
                </li>
                <li>
                    <li><i class="fa-regular fa-circle-check"></i>
                    <p>
                    ${item.servicePara3}
                    </p>
                </li>
            </ul>
        </div>
    </div>`
})

let service = document.querySelector("#service");
let serviceMouse = document.querySelector("#serviceMouse");
service.addEventListener("mousemove",(event)=>{
    bannerMouse.innerHTML = "Service";
    bannerMouse.style.backgroundColor = "#071b27"
})

// service section end

// commit section start
let commitment = document.querySelector("#commitment")
commitment.addEventListener("mousemove",(event)=>{
    bannerMouse.innerHTML = "commitment";
    bannerMouse.style.backgroundColor = "#008eff"
})
 let commitItemWrapperData = [
    {
        commitHead: "Mission",
        commitPara: "At Borderless Chain, we aim to connect and empower communities through a secure and inclusive platform. We bridge cultural gaps and drive growth with innovative technology, fostering global connections and empowerment for all."
    },
    {
        commitHead: "Vision",
        commitPara: "Borderless Chain aims to be a global leader in supporting youth, empowering communities, and enhancing collaboration. We envision a world where everyone thrives, bridging cultural gaps and promoting social justice for a sustainable future."
    }
 ]

 let commitItemWrapper = document.querySelector(".commitItemWrapper")
 commitItemWrapperData.map((item)=>{
    commitItemWrapper.innerHTML += `
    <li>
        <i class="fa-regular fa-copy"></i>
        <div>
            <h4 class="commitHead">${item.commitHead}</h4>
            <p class="commitPara">
            ${item.commitPara}
            </p>
        </div>
    </li>
    `
 })
// commit section end

// Testimonials Section Start
let testimonials = document.querySelector("#testimonials")
testimonials.addEventListener("mousemove",(event)=>{
    bannerMouse.innerHTML = "Testimonials";
    bannerMouse.style.backgroundColor = "#ffb906";
})


let testiCardData = [
    {
        testiCardTitle: "Alex, United States",
        testiCardPara: "I was able to find my dream job through Borderless Chain's matchmaking service. It was amazing to connect with professionals from all over the world and discover new opportunities.",
        image: "./images/testiImage_1.png"
    },
    {
        testiCardTitle: "Maria, Brazil",
        testiCardPara: "I met my soulmate on Borderless Chain. It's the best platform for connecting with people who share your values and interests.",
        image: "./images/testiImage_2.png"
    },
    {
        testiCardTitle: "Chen, China",
        testiCardPara: "I've been using Borderless Chain to share my art with the world. It's been a great way to connect with other artists and build a community.",
        image: "./images/testiImage_3.png"
    },
    {
        testiCardTitle: "David, Australia",
        testiCardPara: "Borderless Chain has helped me expand my business network and find new clients. It's a valuable tool for anyone looking to grow their career or business.",
        image: "./images/testiImage_4.png"
    },
    {
        testiCardTitle: "Sarah, United Kingdom",
        testiCardPara: "The Affluent Members Club has been a game-changer for my business. I've made valuable connections and learned a lot from other successful entrepreneurs.",
        image: "./images/testiImage_5.png"
    },
    {
        testiCardTitle: "Ahmed, Egypt",
        testiCardPara: "I've been able to support several charitable causes through the Affluent Members Club. It's a great way to give back and make a difference.",
        image: "./images/testiImage_6.png"
    },
    {
        testiCardTitle: "Yasmin, India",
        testiCardPara: "The Affluent Members Club has provided me with valuable investment opportunities and financial advice. It's a great resource for anyone looking to grow their wealth.",
        image: "./images/testiImage_7.png"
    },
    {
        testiCardTitle: "Kenji, Japan",
        testiCardPara: "The Affluent Members Club has provided me with valuable investment opportunities and financial advice. It's a great resource for anyone looking to grow their wealth.",
        image: "./images/testiImage_1.png"
    },
    {
        testiCardTitle: "David, Australia",
        testiCardPara: "Borderless Chain has significantly expanded my business network. It's been invaluable for finding new clients and growing my business.",
        image: "./images/testiImage_2.png"
    }
]
let testiCardWrapper = document.querySelector(".testiCardWrapper")
testiCardData.map((item)=>{
    testiCardWrapper.innerHTML += `
        <div class="testiCard">
                        <div class="testiCardHead">
                            <img src="${item.image}" alt="Testimonial Image">
                            <div>
                                <h4 class="testiCardTitle">${item.testiCardTitle}</h4>
                                <div class="rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="testiCardBody">
                            <p>${item.testiCardPara}</p>
                        </div>
                    </div>
    `
})
// Testimonials Section end



// Global Community Section Start

let globalCommunity = document.querySelector("#globalCommunity");
globalCommunity.addEventListener("mousemove",(event)=>{
    bannerMouse.innerHTML = "Join Us";
    bannerMouse.style.backgroundColor = "#008eff"
})


// let globalThrivingCommunityData = [
//     {
//         globalCardTitle: "SNS & Community Site",
//         globalCardPara1: "<strong>Connect with Millions:</strong> Engage with a global network of like-minded individuals, expanding your professional and personal circles.",
//         globalCardPara2: "<strong>Discover Opportunities:</strong> Unlock new business ventures, find friends, and access resources for personal growth.",
//         globalCardPara3: "<strong>Experience Inclusivity:</strong> Be part of a supportive community that values every member and fosters a welcoming environment."
//     },
//     {
//         globalCardTitle: "Join Our Exclusive Club",
//         globalCardPara1: "<strong>Access Exclusive Benefits:</strong> Enjoy unique privileges and personalized support, with exclusive opportunities tailored to enhance your experience.",
//         globalCardPara2: "<strong>Network with Influencers:</strong> Connect with industry leaders and build valuable relationships with pioneers.",
//         globalCardPara3: "<strong>Make a Positive Impact:</strong> Contribute to meaningful causes and support initiatives that drive positive change."
//     }
// ]
let globalThrivingCommunityData1=[
    {
        globalCardTitle: "SNS & Community Site",
        globalCardPara1: "<strong>Connect with Millions:</strong> Engage with a global network of like-minded individuals, expanding your professional and personal circles.",
        globalCardPara2: "<strong>Discover Opportunities:</strong> Unlock new business ventures, find friends, and access resources for personal growth.",
        globalCardPara3: "<strong>Experience Inclusivity:</strong> Be part of a supportive community that values every member and fosters a welcoming environment."
    }
]
let globalThrivingCommunityData2=[
    {
        globalCardTitle: "Join Our Exclusive Club",
        globalCardPara1: "<strong>Access Exclusive Benefits:</strong> Enjoy unique privileges and personalized support, with exclusive opportunities tailored to enhance your experience.",
        globalCardPara2: "<strong>Network with Influencers:</strong> Connect with industry leaders and build valuable relationships with pioneers.",
        globalCardPara3: "<strong>Make a Positive Impact:</strong> Contribute to meaningful causes and support initiatives that drive positive change."
    }
]


let globalThrivingCommunity = document.querySelectorAll(".globalThrivingCommunity")
globalThrivingCommunityData1.map((item)=>{
    globalThrivingCommunity[0].innerHTML = `
        <h3 class="globalCardTitle">${item.globalCardTitle}
            <i class="fa-solid fa-arrow-right"></i>
        </h3>
        <ul>
            <li>
                <i class="fa-solid fa-square-check"></i>
                <p>${item.globalCardPara1}</p>
            </li>
            <li>
                <i class="fa-solid fa-square-check"></i>
                <p>${item.globalCardPara2}</p>
            </li>
            <li>
                <i class="fa-solid fa-square-check"></i>
                <p>${item.globalCardPara3}</p>
            </li>
        </ul>
    `
})
globalThrivingCommunityData2.map((item)=>{
    globalThrivingCommunity[1].innerHTML = `
        <h3 class="globalCardTitle">${item.globalCardTitle}
            <i class="fa-solid fa-arrow-right"></i>
        </h3>
        <ul>
            <li>
                <i class="fa-solid fa-square-check"></i>
                <p>${item.globalCardPara1}</p>
            </li>
            <li>
                <i class="fa-solid fa-square-check"></i>
                <p>${item.globalCardPara2}</p>
            </li>
            <li>
                <i class="fa-solid fa-square-check"></i>
                <p>${item.globalCardPara3}</p>
            </li>
        </ul>
    `
})

// Global Community Section End

// Contact Section Start
let contact = document.querySelector("#contact");
contact.addEventListener("mousemove",(event)=>{
    bannerMouse.innerHTML = "Contact Info";
    bannerMouse.style.backgroundColor = "#008eff"
})

// Contact Section End

// Footer Section Start
let footer = document.querySelector("#footer");
footer.addEventListener("mousemove",(event)=>{
    bannerMouse.innerHTML = "footer";
    bannerMouse.style.backgroundColor = "#5eb4e6"
})

// Footer Section End