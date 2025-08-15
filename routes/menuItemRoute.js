const express = require("express");
const MenuItem = require("../models/menu.js");

const router = express.Router();

// CREATE new menu item
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "problem in saving the data" });
  }
});

// READ all menu items
router.get("/", async (req, res) => {
  try {
    const response = await MenuItem.find();
    console.log("menu items fetched");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "menu items not found" });
  }
});

// READ menu items by taste type
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (["sweet", "spicy", "sour"].includes(tasteType)) {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("filtered menu items fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid taste type" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "menu item not found" });
  }
});

// UPDATE menu item by ID
router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const updatedMenuData = req.body;

    const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ message: "menu item with this id not found" });
    }

    console.log("menu item updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to update menu item" });
  }
});

// DELETE menu item by ID
router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(menuId);

    if (!response) {
      return res.status(404).json({ message: "menu item not found" });
    }

    console.log("menu item deleted");
    res.status(200).json({ message: "menu item deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in deleting menu item" });
  }
});

module.exports = router;
