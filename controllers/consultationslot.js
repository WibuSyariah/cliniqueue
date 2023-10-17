const { AppError } = require('../helpers');
const { ConsultationSlot } = require("../models");

class ConsultationSlotController {
  static async create(req, res, next) {
    try {
      await ConsultationSlot.create({
        ...req.body
      });

      res.status(201).json({
        message: "ConsultationSlot created",
      });
    } catch (error) {
      next(error);
    }
  }

  static async readOne(req, res, next) {
    try {
      const { id } = req.params;

      const consultationSlot = await ConsultationSlot.findByPk(id);

      if (!consultationSlot) {
        throw new AppError("ConsultationSlot not found", 404);
      }

      res.status(200).json({
        message: "ConsultationSlot detail",
        data: consultationSlot
      });
    } catch (error) {
      next(error);
    }
  }

  static async readAll(req, res, next) {
    try {
      const { page, limit } = req.query;

      let condition = {
        limit: limit ? Number(limit) : 20,
        offset: (Number(page ? page : 1) - 1) * (limit ? Number(limit) : 20),
      };

      const consultationSlot = await ConsultationSlot.findAndCountAll(condition);

      res.status(200).json({
        message: "ConsultationSlot List",
        data: {
          ...consultationSlot,
          totalPages: Math.ceil(consultationSlot.count / Number(limit)),
          currentPage: Number(page)
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;

      const consultationSlot = await ConsultationSlot.findByPk(id)

      if (!consultationSlot) {
        throw new AppError("ConsultationSlot not found", 404);
      }

      await consultationSlot.update({
        ...req.body
      });

      res.status(200).json({
        message: "ConsultationSlot updated",
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const consultationSlot = await ConsultationSlot.findByPk(id)

      if (!consultationSlot) {
        throw new AppError("ConsultationSlot not found", 404);
      }

      consultationSlot.destroy()

      res.status(200).json({
        message: "ConsultationSlot deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConsultationSlotController;
