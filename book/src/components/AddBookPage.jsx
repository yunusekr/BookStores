import React from "react";
import { useForm } from "react-hook-form";
import { getProducts, saveProduct } from "../store/actions";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AddButton.css";
function AddBookPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    const formattedData = {
      name: data.name,
      description: data.description,
      price: data.price,
      pagenumber: data.pagenumber,
      stock: data.stock,
      product_image: data.product_image,
      category: {
        name: data.categoryDto.name,
      },
      author: {
        fullname: data.authorDto.fullname,
      },
    };
    dispatch(saveProduct(formattedData));
    dispatch(getProducts());
    toast.success(
      "Kayıt Başarıyla Eklenmiştir.Anasayfaya Yönlendiriliyorsunuz.",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
    setTimeout(() => {
      history.push("/products");
    }, 3000);
  };

  return (
    <div className="flex justify-center h-full  items-center mt-[150px]">
      <div className="flex justify-center formdiv w-[700px] h-[550px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          {" "}
          <section className="flex gap-10">
            <div className="flex flex-col">
              <label htmlFor="productName">Name</label>
              <input
                className="bg-[#526696] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                name="text"
                {...register("name")}
                id="productName"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productDescription">Description</label>
              <input
                className="bg-[#526696] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                name="text"
                {...register("description")}
                id="productDescription"
                placeholder="Description"
                type="text"
              />
            </div>
          </section>
          <section className="flex gap-10">
            <div className="flex flex-col">
              <label htmlFor="productPrice">Price</label>
              <input
                className="bg-[#526696] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                name="text"
                {...register("price")}
                id="productPrice"
                placeholder="Price"
                type="number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productPageNumber">Page Number</label>
              <input
                className="bg-[#526696] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                name="text"
                {...register("pagenumber")}
                id="productPageNumber"
                placeholder="Page Number"
                type="number"
              />
            </div>
          </section>
          <section className="flex gap-10">
            <div className="flex flex-col">
              <label htmlFor="productStock">Stock</label>
              <input
                className="bg-[#526696] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                name="text"
                {...register("stock")}
                id="productStock"
                placeholder="Stock"
                type="number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productImage">Product Image</label>
              <input
                className="bg-[#526696] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                name="text"
                {...register("product_image")}
                id="productImage"
                placeholder="Product Image"
                type="text"
              />
            </div>
          </section>
          <section className="flex gap-10">
            <div className="flex flex-col">
              <label htmlFor="productAuthor">Author</label>
              <input
                className="bg-[#526696] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                name="text"
                {...register("authorDto.fullname")}
                id="productAuthor"
                placeholder="Author"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productCategory">Category</label>
              <input
                className="bg-[#526696] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                name="text"
                {...register("categoryDto.name")}
                id="productCategory"
                placeholder="Category"
                type="text"
              />
            </div>
          </section>
          <div className="flex gap-5">
            <button type="submit" id="btn" className="btns">
              Ekle
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default AddBookPage;
