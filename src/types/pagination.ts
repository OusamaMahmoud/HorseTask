export interface PaginationLinks {
    first: string
    last: string
    prev: string | null
    next: string | null
  }
  
  export interface MetaLink {
    url: string | null
    label: string
    active: boolean
  }
  
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
  