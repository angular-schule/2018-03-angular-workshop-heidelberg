import fontawesome from '@fortawesome/fontawesome';
import { faThumbsUp, faThumbsDown, faStar } from '@fortawesome/fontawesome-free-solid';

export const initIcons = () => {
  fontawesome.library.add(faThumbsUp, faThumbsDown, faStar);
};
