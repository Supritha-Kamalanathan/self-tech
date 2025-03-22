import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import cors from 'cors';
import { RegisterRoutes } from './routes';
import { ValidateError } from 'tsoa';
// import chalk from 'chalk';

const app = express();
const port = 3000;

// Middleware to log request details
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Endpoint: ${req.originalUrl}`);
    console.log('Request Payload: ', req.body);

    next();
});

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

RegisterRoutes(app);

// Middleware to handle errors
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}`, err.fields);
        return res.status(422).json({
            message: "Validation Failed",
            details: err?.fields,
        });
    }
    if (err instanceof Error) {
        console.error('Internal Server Error: ', err.message);
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
    next();
});

app.listen(port, () => console.log(`app running on port ${port}`));