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

Home Screen :
![Screenshot 2024-07-02 014412](https://github.com/user-attachments/assets/a67869e3-48b7-4686-8174-aeb6c90e38c0)

Menu on Home Page :
![Screenshot 2024-07-02 013828](https://github.com/user-attachments/assets/fc383de5-02a7-4205-a734-be421dad347d)

All Items :
![Screenshot 2024-07-02 013908](https://github.com/user-attachments/assets/b159dc16-2a83-47f5-8381-b0db96056d4f)

Filtered Items :
![Screenshot 2024-07-02 014331](https://github.com/user-attachments/assets/a574b94b-f86e-44e4-b9be-6868c99df333)

Cart Page :
![Screenshot 2024-07-02 014518](https://github.com/user-attachments/assets/0c68aaff-0708-4dc7-a6cf-0f5fe0c696cc)

CheckOut Page :
![Screenshot 2024-07-02 014555](https://github.com/user-attachments/assets/fe2a6cdd-012c-45bf-823e-07efb4df1ae2)

Payments Page :
![Screenshot 2024-07-02 014749](https://github.com/user-attachments/assets/3f9faa29-4ac9-4b34-8882-ac83323303f7)

MyOrders Page :
![Screenshot 2024-07-02 014910](https://github.com/user-attachments/assets/0fa753d1-b98b-43f0-a0d4-314f58fe8fce)

Admin Page Add Item :
![Screenshot 2024-07-02 015205](https://github.com/user-attachments/assets/63761653-6209-49c1-9428-ce0c692f836f)

Admin Page All Listed Items :
![Screenshot 2024-07-02 015306](https://github.com/user-attachments/assets/6bf89635-0d00-4a5a-bd30-e443da770cf6)

Admin Page Complete Order Tracking :
![Screenshot 2024-07-02 015336](https://github.com/user-attachments/assets/82a6da27-d5e4-4eab-b8f1-659fd9368f1d) 
