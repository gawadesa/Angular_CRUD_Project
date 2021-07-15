module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {

        Product_Name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    });

    return Product;
};