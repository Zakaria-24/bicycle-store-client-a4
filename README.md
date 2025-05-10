# Bicycle Store

Bicycle Store is an e-commerce application designed to manage a bicycle store. It allows users to browse bicycles, place orders, and complete payments securely using the ShurjoPay payment gateway.

## [ Live Site URL]("")

Click here for the Client Live Site: [https://bicycle-store-client-a4.vercel.app](https://bicycle-store-client-a4.vercel.app)


## 🚀 Features
1. **Order Bicycles:** Users can select quantity, view total price, and provide order details.
2. **Order Update:** Users can update cart items and order multiple products.
3. **Payment System:** Integrated ShurjoPay for seamless transactions.
4. **Profile Manage:** Users can update personal information.


## 🧑‍💻 Usegaes Technologies
- React Js
- Tailwind CSS
- Typescript
- Redux Toolkit
- Framer Motion"


## 🛠️ Installation and Setup

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2.Install the required dependencies:

```bash
npm install
```

3. Create a .env file in the root directory and configure the following environment variables:

```bash
 VITE_REACT_APP_CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
VITE_REACT_APP_CLOUDINARY_API_KEY=<your_Cloudinary_api_key>
VITE_REACT_APP_CLOUDINARY_API_SECRET=<your_Cloudinary_api_secret>
VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET=<your_Cloudinary_upload_secret>
```
NB: If you want to change API_BASE_URL please go to redux folder > api > baseApi.ts then You can Change it.

4. Start the Client:

```bash
 npm run dev
```

5. The API will be available at

```bash
http://localhost:5173
```


