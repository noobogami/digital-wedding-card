import { FaHeart, FaRing } from 'react-icons/fa';
import { weddingConfig } from './config';

export const DecoIcon =
  weddingConfig.theme.decoration === 'rings' ? FaRing : FaHeart;
