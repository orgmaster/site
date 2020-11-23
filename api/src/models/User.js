const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	const User = sequelize.define(
		"User",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			fullname: {
				type: DataTypes.STRING,
                allowNull: false,
                unique:true
            },
            email: {
				type: DataTypes.STRING,
                allowNull: false,
                unique:true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
		},
		{
			tableName: "users",
		}
	);
};
