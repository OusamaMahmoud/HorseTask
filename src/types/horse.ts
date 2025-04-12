import { PaginationLinks, PaginationMeta } from "./pagination";

import { Package, Service } from "./package";

export interface Horse {
  id: number;
  name: string;
  breed: string;
  country_origin: string;
  date_of_birth: string;
  father_name: string;
  mother_name: string;
  horse_number: string;
  gender: {
    id: number;
    name_ar: string;
    name_en: string;
  };
  image: string;
  paternity_certificate: string;
  place: {
    id: number;
    number: string;
    category: Record<string, any>;
  };
  production_place: string | null;
  injuries: any[];
  other_injuries: string | null;
  other_registers: string | null;
  out_reason: string | null;
  out_time: string | null;
  packages: Package[]; 
  registers: any[];
  services: Service[]; 
  training_horse: number;
  created_at: string;
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    horses_count: number;
    image: string;
  };
}

export interface HorseApiResponse {
  data: Horse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}
