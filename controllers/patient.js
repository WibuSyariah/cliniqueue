const { AppError } = require('../helpers');
const { Patient } = require("../models");

class PatientController {
  static async create(req, res, next) {
    try {
      await Patient.create({
        ...req.body
      });

      res.status(201).json({
        message: "Patient created",
      });
    } catch (error) {
      next(error);
    }
  }

  static async readOne(req, res, next) {
    try {
      const { id } = req.params;

      const patient = await Patient.findByPk(id);

      if (!patient) {
        throw new AppError("Patient not found", 404);
      }

      res.status(200).json({
        message: "Patient detail",
        data: patient
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

      const patient = await Patient.findAndCountAll(condition);

      res.status(200).json({
        message: "Patient List",
        data: {
          ...patient,
          totalPages: Math.ceil(patient.count / Number(limit)),
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

      const patient = await Patient.findByPk(id)

      if (!patient) {
        throw new AppError("Patient not found", 404);
      }

      await patient.update({
        ...req.body
      });

      res.status(200).json({
        message: "Patient updated",
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const patient = await Patient.findByPk(id)

      if (!patient) {
        throw new AppError("Patient not found", 404);
      }

      patient.destroy()

      res.status(200).json({
        message: "Patient deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PatientController;
