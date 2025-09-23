declare namespace Express {
  export interface Request {
    /** injected by authMiddleware */
    user?: { id: string };

    file?: {
      path: string;
      originalname?: string;
      mimetype?: string;
    };
  /** nuevo para probar archivos */
    files?: Array<{
      path: string;
      originalname?: string;
      mimetype?: string;
    }>;
  }
}