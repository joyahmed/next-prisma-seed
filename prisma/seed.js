const { PrismaClient } = require('@prisma/client');
const { products } = require('./products');

const prisma = new PrismaClient();

const load = async () => {
	try {
		await prisma.product.createMany({
			data: products
		});
		console.log('Products are created');
	} catch (error) {
		console.log(error);
	} finally {
		await prisma.$disconnect;
	}
};

load();
