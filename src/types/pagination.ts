// src/types/pagination.ts

/** Top‑level pagination links object */
export interface PaginationLinks {
    first: string
    last: string
    prev: string | null
    next: string | null
  }
  
  /** Individual link entry inside meta.links */
  export interface MetaLink {
    url: string | null
    label: string
    active: boolean
  }
  
  /** Meta information about the pagination state */
  export interface PaginationMeta {
    current_page: number
    from: number
    last_page: number
    links: MetaLink[]
    path: string
    per_page: number
    to: number
    total: number
  }
  