import { link } from 'fs';
export interface ITargetCard {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  gradient?: string;
  link?: string;
}
