let delivery = "express";
switch (delivery) {
    case "standard":
        console.log("Package will be delivered in 3-5 days.");
        break;
    case "express":
        console.log("Package will be delivered in 1-2 days.");
        break;
    case "overnight":
        console.log("Package will be delivered next day.");
        break;

    default:
        console.log("Select a delivery type!");
        break;
}