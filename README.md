https://food-easy-frontend.vercel.app

Food Easy is a modern and dynamic food ordering platform designed to offer a seamless and efficient experience for users. Built using the powerful MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, this website ensures robust performance and scalability. Additionally, Stripe integration is employed to facilitate secure and smooth payment transactions. The frontend and admin panel are both deployed on Vercel, while the backend services are hosted on Render, ensuring reliable and fast access.

The user interface of Food Easy is designed to be intuitive and user-friendly. On the home page, users can browse through a wide variety of food items, with filtering and pagination features that allow them to view all or select items based on their preferences. The cart functionality enables users to add items from the menu, view their selections on the cart page, adjust quantities, and remove items as needed. Each item in the cart is clearly displayed with its price, quantity, and a cancel option, making the shopping experience straightforward and transparent.

Food Easy also provides a secure and streamlined authentication process. Users can register and log in to the platform, and upon logging in, they receive a JWT (JSON Web Token) that grants access to private and guarded routes. This security feature ensures that only authenticated users can proceed to the place order page. On this page, users provide the necessary details to place their order and are then redirected to the Stripe checkout page for payment. After the transaction is verified, users are taken to their orders page, where they can track the status of their orders, which can be marked as "Food Processing," "Out for Delivery," or "Delivered."

The admin interface of Food Easy offers comprehensive control over the platform's operations. Administrators can manage the menu by adding, removing, or editing food items (CRUD operaions). They also have access to a complete list of all orders placed by users and can update the status of any order. This level of control ensures that the website's offerings and order statuses are always up to date and accurate.

Behind the scenes, Food Easy leverages MongoDB Atlas for data storage, ensuring that all user information, food items, and order details are securely stored and easily accessible. The website uses global context to manage state across the application, avoiding the complications of prop drilling. Additionally, the multer library is utilized for efficient image uploading and storage, and the Stripe package enables smooth and secure payment transactions.

Major Challenges :
Food Easy addresses several technical challenges to deliver a high-quality user experience.
1.) Key among these challenges were structuring the flow of functionality to render data and various components effectively.
2.) Studying and drawing inspiration from other e-commerce and food-ordering websites to incorporate valuable ideas and functionalities. 

By overcoming these challenges, Food Easy provides a reliable and enjoyable platform for both users and administrators.
