import { Request, Response } from "express";
import { RouteHandler } from "../../../types";
import customers from "./customers"; // Assuming customers is an array of customer objects

interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  street_address: string;
  city: string;
  country: string;
  signed_on_date: string;
}

interface CreateCustomerRequest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  street_address: string;
  city: string;
  country: string;
  signed_on_date: string;
}

const handlers: RouteHandler[] = [
  {
    route: "/customers",
    method: "GET",
    handler: (req: Request, res: Response): void => {
      res.json(customers);
    },
  },
  {
    route: "/customers",
    method: "POST",
    handler: (req: Request<{}, {}, CreateCustomerRequest>, res: Response): void => {
      const { first_name, last_name, email, street_address, city, country, signed_on_date } = req.body;
      if (!first_name || !last_name || !email || !street_address || !city || !country || !signed_on_date) {
        res.status(400).json({
          success: false,
          error: "All fields are required",
        });
        return;
      }
      const newCustomer: Customer = {
        id: `customer_${Date.now()}`,
        first_name,
        last_name,
        email,
        street_address,
        city,
        country,
        signed_on_date,
      };

      customers.push(newCustomer);

      res.status(201).json({ success: true, data: newCustomer });
    },
  }
];

export default handlers;
