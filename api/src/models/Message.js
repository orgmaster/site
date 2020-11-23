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
                allowNull: false
            },
			message: {
				type: DataTypes.TEXT,
                allowNull: false
            },
            email: {
				type: DataTypes.STRING,
                allowNull: false
            },
            answered_at: {
                type: DataTypes.DATE
            }
		},
		{
			tableName: "users",
		}
	);
};
