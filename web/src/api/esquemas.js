const User = {
    userName: "", 
    firstName: "",
    lasName: "", 
    email: "",
    principalPhone: "",
    location: "", 
    profileImage: "",

}

const Product = {
    name: "", 
    description:"",
    userFacilities: {
        express: false, 
        dataphone: false, 
        onlinePayment: false, 
        other: ""
    },
    productImage: [
        image1,
        image2,
        image3
    ],
    mediaConnection: {
        facebookURL: "", 
        instagramURL: "", 
        whatsappNumber: "", 
        webSite: ""
    }, 
    Categories =
    {
        name: "",
        SubCategories: [
            {
                name: "",
            }
        ]
    } 
}