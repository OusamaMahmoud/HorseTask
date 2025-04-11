// src/types/package.ts

/** Payment information */
export interface Payment {
    id: number
    amount: number
    status: 'completed' | 'pending' | 'failed'
    payment_method: 'cash' | 'credit_card' | 'bank_transfer' // Expand with more methods if needed
  }
  
  /** Service category information */
  export interface ServiceCategory {
    id: number
    key: string
    name_ar: string
    name_en: string
    parent_id: number | null
    created_at: string
    updated_at: string
  }
  
  /** Package object for a horse */
  export interface Package {
    id: number
    price: number
    period: 'monthly' | 'yearly' // Can add more periods if needed
    payment: Payment
    service_category: ServiceCategory
  }
  
  /** Service object for a horse */
  export interface Service {
    id: number
    name: string | null
    price: number
    cost: number
    payment: Payment
  }
  