// This file contains all the data that will populate the Article Components props parameter
import Img1 from '../Images/RehobothBeach.jpg';
import Img2 from '../Images/WildwoodBeach.jpg';

const ArticleData = [
  {
    title: 'Wildwood',
    img: Img2,
    date: 'July, 2022',
    location: 'Wildwood, New Jersey',
    hyperlink:
      'https://www.google.com/maps/place/Wildwood,+NJ+08260/@38.9878498,-74.8270119,15z/data=!3m1!4b1!4m5!3m4!1s0x89c0a56508521e6f:0x7b94d349e94a2872!8m2!3d38.9917797!4d-74.8148894',
    description:
      "Traveled to Wildwood, NJ to meet friends. Visited Morey's to ride some of the amusement rides."
  },
  {
    title: 'Rehoboth Beach',
    img: Img1,
    date: 'May, 2022',
    location: 'Rehoboth Beach, Delaware',
    hyperlink:
      'https://www.google.com/maps/place/Rehoboth+Beach,+DE/@38.7241902,-75.1253144,13z/data=!3m1!4b1!4m5!3m4!1s0x89b896667c7333a7:0x61182de5a751636a!8m2!3d38.7209454!4d-75.0760137',
    description:
      'Travel to Rehoboth Beach for summer vacation with the Family. Spent Several days exporing the beach. Then spent a few days traveling to Dewey Beach. Then went to visit Ocean City, Maryland, and rented a Boat to travel around the sound. Went parasailing and windsurfing.',
  },
];

export default ArticleData;
