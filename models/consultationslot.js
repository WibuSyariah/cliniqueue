'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConsultationSlot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Reservation, { foreignKey: "slotId" })
    }
  }
  ConsultationSlot.init({
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Start Time cannot be empty",
        },
        notNull: {
          msg: "Start Time cannot be empty",
        },
        isDate: {
          msg: "Start Time must be a date",
        },
      },
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "End Time cannot be empty",
        },
        notNull: {
          msg: "End Time cannot be empty",
        },
        isDate: {
          msg: "End Time must be a date",
        },
      },
    },
    maxCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Max Capacity must be an integer"
        },
        notNull: {
          msg: "Max Capacity cannot be empty",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'ConsultationSlot',
    paranoid: true
  });
  return ConsultationSlot;
};