'use strict';

const presentationList = document.querySelector('#presentation-list');
const presentationTemplate = document.querySelector('#presentation-template').content;
const bookList = document.querySelector('#bookList');
const bookTemplate = document.querySelector('#bookTemplate').content;

const employeeList = document.querySelector('#employee-list');
const employeeTemplate = document.querySelector('#employee-template').content;

const events = [
  {
    date: '2023, December 6-8',
    title: 'WebTech Summit',
    location: 'San Francisco, CA, Moscone Center',
  },
  {
    date: '2023, December 12',
    title: 'Workshop "Responsive Design Strategies for Modern Websites"',
    location: 'Copenhagen, Denmark, TBD',
  },
  {
    date: '2024, January 15-17',
    title: "Developer's Paradise Conference",
    location: 'Miami, FL, Miami Convention Center',
  },
  {
    date: '2024, January 22-23',
    title: 'CodeCraft Workshop',
    location: 'New York City, NY, TBD',
  },
  {
    date: '2024, February 5-6',
    title: 'Design & Develop Summit',
    location: 'Austin, TX, Austin Convention Center',
  },
  {
    date: '2024, February 15',
    title: 'Workshop "Advanced JavaScript Techniques"',
    location: 'Copenhagen, Denmark, TBD',
  },
  {
    date: '2024, March 10-12',
    title: 'WebMasters Expo',
    location: 'Las Vegas, NV, Las Vegas Convention Center',
  },
  {
    date: '2024, March 18',
    title: 'Workshop "Mastering CSS Grid Layouts"',
    location: 'Copenhagen, Denmark, TBD',
  },
  {
    date: '2024, April 5',
    title: 'Workshop "Optimizing Performance in Web Applications"',
    location: 'Copenhagen, Denmark, TBD',
  },
  {
    date: '2024, April 19-20',
    title: 'Frontend Focus Conference',
    location: 'Seattle, WA, Washington State Convention Center',
  },
  {
    date: '2024, May 8-9',
    title: "Developer's Summit",
    location: 'Chicago, IL, McCormick Place',
  },
  {
    date: '2024, May 15-16',
    title: 'WebTech Summit',
    location: 'Boston, MA, Hynes Convention Center',
  },
  {
    date: '2024, June 6',
    title: 'Workshop "Building Progressive Web Apps"',
    location: 'Copenhagen, Denmark, Den Sorte Diamant',
  },
  {
    date: '2024, June 20',
    title: 'Workshop "Mastering React: Best Practices and Advanced Techniques"',
    location: 'Aarhus, Denmark, TBD',
  },
];

const books = [
  {
    imageSrc: '/img/book_php.png', // You can fill in the image source URLs as needed
    title: 'Advanced PHP',
    subTitle: 'From Zero to Hero',
    description: `"Advanced PHP: From Zero to Hero" is a groundbreaking book that unlocks the full potential of PHP programming. With meticulous detail, Lind guides readers through advanced concepts, empowering them to master complex topics such as object-oriented programming, database integration, and secure web application development. This comprehensive guide is a must-have for aspiring PHP developers seeking to elevate their skills to heroic heights.`,
  },
  {
    imageSrc: '/img/book_css.png',
    title: 'CSS for Developers',
    subTitle: 'A Visual Journey',
    description: `This work offers an immersive exploration of CSS that transcends mere syntax. Through vivid illustrations and practical examples, Lind demystifies the intricacies of CSS, equipping developers with the tools to craft stunning, responsive designs. This visual masterpiece is an indispensable companion for developers seeking to elevate their CSS skills and create visually captivating websites.`,
  },
  {
    imageSrc: '/img/book_js.png',
    title: 'Advanced JavaScript',
    subTitle: 'Frameworkless',
    description: `In "Advanced JavaScript: Frameworkless," Tristan Wede Lind revolutionizes the approach to JavaScript development. Breaking free from the confines of frameworks, Lind delves into the core principles and advanced techniques that empower developers to create robust, scalable, and framework-independent JavaScript applications. This essential guide unveils the true potential of JavaScript, transforming developers into true masters of the language.`,
  },
  {
    imageSrc: '/img/book_programming.png',
    title: 'Basic Programming',
    subTitle: 'Algorithms and Beyond',
    description: `A definitive guide that demystifies the fundamentals of programming. With clarity and precision, Lind introduces readers to essential concepts such as variables, loops, and conditionals, while also delving into the world of algorithms. This comprehensive resource equips aspiring programmers with the foundational knowledge needed to embark on a successful coding journey.`,
  },
  {
    imageSrc: '/img/book_js_basic.png',
    title: 'Basic JavaScript',
    subTitle: 'Tweaking the Web',
    description: `"Basic JavaScript" is a transformative book that demystifies the building blocks of JavaScript. With practical examples and step-by-step instructions, Lind empowers readers to enhance websites with interactive elements and dynamic functionalities. This essential guide unlocks the power of JavaScript, enabling readers to tweak the web and create engaging user experiences.`,
  },
  {
    imageSrc: '/img/book_front_end.png',
    title: 'Front-End Web Development',
    subTitle: 'A Nice Introduction',
    description: `Tristan Wede Lind crafts a captivating journey into the world of front-end development. Lind artfully introduces readers to HTML, CSS, and JavaScript, unraveling the secrets of creating visually stunning and interactive websites. With its approachable style and comprehensive coverage, this book is the perfect starting point for aspiring front-end developers.`,
  },
];

const employees = [
  {
    imageSrc: '/img/victoria.png',
    department: 'Publishing',
    role: 'Editor',
    mail: 'victoriamarsh@keapublishing.com',
    phone: '(+44) 079 7502 0028',
  },
  {
    imageSrc: '/img/elly.png',
    department: 'Agent',
    role: 'Elly Houthuijzen',
    mail: 'elly@houthuijzen.com',
    phone: '(+31) 06-42821232',
  },
];

function addEvents(events) {
  events.forEach(event => {
    const clone = presentationTemplate.cloneNode(true);
    clone.querySelector('.date').textContent = event.date;
    clone.querySelector('.presentation-title').textContent = event.title;
    clone.querySelector('.location').textContent = event.location;
    presentationList.appendChild(clone);
  });
}

function addBooks(books) {
  books.forEach(book => {
    const clone = bookTemplate.cloneNode(true);
    const img = clone.querySelector('img');
    img.src = book.imageSrc;
    clone.querySelector('.title').textContent = book.title;
    clone.querySelector('.bookSubtitle').textContent = book.subTitle;
    clone.querySelector('.bookDescription').textContent = book.description;
    bookList.appendChild(clone);
  });
}

function addEmployees(employees) {
  employees.forEach(employee => {
    const clone = employeeTemplate.cloneNode(true);
    const img = clone.querySelector('img');
    img.src = employee.imageSrc;
    clone.querySelector('.department').textContent = employee.department;
    clone.querySelector('.role').textContent = employee.role;
    const email = clone.querySelector('.email');
    email.textContent = employee.mail;
    email.href = `mailto:${employee.mail}`;
    const phone = clone.querySelector('.phone-number');
    phone.textContent = employee.phone;
    phone.href = `tel:${employee.phone}`;
    employeeList.appendChild(clone);
  });
}

addBooks(books);
addEvents(events);
addEmployees(employees);
