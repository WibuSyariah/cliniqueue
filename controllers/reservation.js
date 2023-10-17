const { AppError } = require('../helpers');
const { Reservation, ConsultationSlot, Patient } = require("../models");

class ReservationController {
  static async create(req, res, next) {
    try {
      const { patientId, slotId } = req.body

      const patient = await Patient.findByPk(patientId);

      if (!patient) {
        throw new AppError("Patient not found", 404);
      }

      const consultationSlot = await Patient.findByPk(slotId);

      if (!consultationSlot) {
        throw new AppError("Consultation Slot not found", 404);
      }

      await Reservation.create({
        ...req.body
      });

      res.status(201).json({
        message: "Reservation created",
      });
    } catch (error) {
      next(error);
    }
  }

  static async readOne(req, res, next) {
    try {
      const { id } = req.params;

      const reservation = await Reservation.findByPk(id);

      if (!reservation) {
        throw new AppError("Reservation not found", 404);
      }

      res.status(200).json({
        message: "Reservation detail",
        data: reservation
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

      const reservation = await Reservation.findAndCountAll(condition);

      res.status(200).json({
        message: "Reservation List",
        data: {
          ...reservation,
          totalPages: Math.ceil(reservation.count / Number(limit)),
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
      const { patientId, slotId } = req.body
      
      const reservation = await Reservation.findByPk(id)

      if (!reservation) {
        throw new AppError("Reservation not found", 404);
      }

      const patient = await Patient.findByPk(patientId);

      if (!patient) {
        throw new AppError("Patient not found", 404);
      }

      const consultationSlot = await Patient.findByPk(slotId);

      if (!consultationSlot) {
        throw new AppError("Consultation Slot not found", 404);
      }

      await reservation.update({
        ...req.body
      });

      res.status(200).json({
        message: "Reservation updated",
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const reservation = await Reservation.findByPk(id)

      if (!reservation) {
        throw new AppError("Reservation not found", 404);
      }

      reservation.destroy()

      res.status(200).json({
        message: "Reservation deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ReservationController;
