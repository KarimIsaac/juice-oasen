 import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products  from './data/products.js';
import juices from './data/juices.js';
import User from './models/user.model.js';
import Product from './models/products.model.js';
import Order from './models/order.js';
import Juice from './models/juice.model.js';
import mongoDB from './db/mongoDB.js';

dotenv.config();

mongoDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Juice.deleteMany(); // Delete existing juices data

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    const sampleJuices = juices.map((juice) => {
      return { ...juice, user: adminUser }; // Add user ID to juices
    });

    await Product.insertMany(sampleProducts);
    await Juice.insertMany(sampleJuices); // Insert juices data

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Juice.deleteMany(); // Delete existing juices data

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}