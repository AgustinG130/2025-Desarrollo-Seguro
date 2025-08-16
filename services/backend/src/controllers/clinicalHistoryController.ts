import { Request, Response, NextFunction } from 'express';
import ClinicalHistoryService from '../services/clinicalHistoryService';

export const listClinicalHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const from = req.query.from ? new Date(req.query.from as string) : undefined;
    const to   = req.query.to   ? new Date(req.query.to as string)   : undefined;
    const list = await ClinicalHistoryService.list(req.user!.id, { from, to });
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const getClinicalHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await ClinicalHistoryService.getById(req.params.id, req.user!.id);
    res.json(record);
  } catch (err) {
    next(err);
  }
};

export const createClinicalHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { doctorName, diagnose } = req.body;
    // if using multer for files: req.files as Express.Multer.File[]
    //const files = Array.isArray(req.files) ? req.files : [];
    const created = await ClinicalHistoryService.create(req.user!.id, {});
    /*
      doctorName,
      diagnose,
      files: undefined
    */
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};
