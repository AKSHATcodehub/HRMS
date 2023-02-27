export interface TableColumn {
    heading: string;
    key: string;
    sort?: boolean;
    type: string;
    link:string
    align?: 'right' | 'left' | 'center';
  }