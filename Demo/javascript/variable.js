let user1 = {
  fullName: "sulochana bhatta",
  age: 16,
  phone: 98765456789,
  address: "ktm",

};

let user2 = {
  fullName: "Bidhya budha",
  age: 15,
  phone: 98765456789,
  perAddress: {
    city: "Dhangadhi",
    district: "kailali",
    wardNo: 7,
    provinceno: 7,
    mayor: "Gopi hamal",
    airIndex: "58",
  },
  tempAddress:{
    city: "ktm",
    district: "bagmati",
    wardNo: 2,
    provinceno: 5,
    mayor: "Sunita Dangol",
    airIndex: "150",
  }
};
let institute ={
    name : "mindrisers institite of technology",
    estd : 2016,
    location : "putalisadak",
    experincesYear : 10,
    courses:{
        course1 :{
        name : "Mern stack",
        duration : "2.5 month",
        fees : "RS.25,000",
        mode : "online"
        },
        course2 :{
        name : "Quality assurance",
        duration : "2 month",
        fees : "RS.20,000",
        mode : "hybrid"
        },
        course3 :{
        name : "Digital marketing",
        duration : "2 month",
        fees : "RS.20,000",
        mode : "hybrid"
        },
    }
};
institute.location="npl"
console.log(institute.location);
