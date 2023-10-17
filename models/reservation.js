'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Patient, { foreignKey: "patientId" })
      this.belongsTo(models.ConsultationSlot, { foreignKey: "slotId" })
    }
  }
  Reservation.init({
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Patient ID cannot be empty",
        },
      },
    },
    slotId: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: "Slot ID cannot be empty",
        },
      },
    },
    queueNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Queue Number must be an integer"
        },
        notNull: {
          msg: "Queue Number cannot be empty",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Reservation',
    paranoid: true
  });
  return Reservation;
};