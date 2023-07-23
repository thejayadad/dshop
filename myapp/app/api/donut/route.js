import User from "@/models/User";
import Donut from "@/models/Donut";

// Assuming you have the donutId after creating the donut
const donutId = "YOUR_NEW_DONUT_ID";

// Find the user and update the donuts array
const userId = "USER_ID"; // Replace with the user's ObjectId
User.findByIdAndUpdate(userId, { $push: { donuts: donutId } }, { new: true }, (err, user) => {
  if (err) {
    console.error("Error updating user donuts:", err);
  } else {
    console.log("User donuts updated successfully:", user);
  }
});
