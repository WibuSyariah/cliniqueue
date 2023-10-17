'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Reservation, { foreignKey: "patientId" })
    }
  }
  Patient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name cannot be empty",
        },
        notNull: {
          msg: "Name cannot be empty",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Patient',
    paranoid: true
  });
  return Patient;
};